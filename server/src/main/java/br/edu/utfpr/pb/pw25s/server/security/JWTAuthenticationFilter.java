package br.edu.utfpr.pb.pw25s.server.security;

import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.security.dto.AuthenticationResponse;
import br.edu.utfpr.pb.pw25s.server.security.dto.UserResponseDTO;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;


@NoArgsConstructor
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private AuthService authService;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager,
                                   AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.authService = authService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response)
                                                throws AuthenticationException {

        try {
            //HTTP.POST {"username":"admin", "password":"P4ssword"}
            //Obtém os dados de username e password utilizando o ObjectMapper para converter o JSON
            //em um objeto User com esses dados.
            User credentials = new User();
            User user = new User();
            //Verifica se o usuário existe no banco de dados, caso não exista uma Exception será disparada
            //e o código será parado de executar nessa parte e o usuário irá receber uma resposta
            //com falha na autenticação (classe: EntryPointUnauthorizedHandler)
            if (request.getInputStream() != null && request.getInputStream().available() > 0) {
                credentials = new ObjectMapper().readValue(request.getInputStream(), User.class);
                user = (User) authService.loadUserByUsername(credentials.getUsername());
            }
            //Caso o usuário seja encontrado, o objeto authenticationManager encarrega-se de autenticá-lo.
            //Como o authenticationManager foi configurado na classe WebSecurity e, foi informado o método
            //de criptografia da senha, a senha informada durante a autenticação é criptografada e
            //comparada com a senha armazenada no banco. Caso não esteja correta uma Exception será disparada
            //Caso ocorra sucesso será chamado o método: successfulAuthentication dessa classe
            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            credentials.getUsername(),
                            credentials.getPassword(),
                            user.getAuthorities()
                    )
            );

        } catch (StreamReadException e) {
            throw new RuntimeException(e);
        } catch (DatabindException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        User user = (User) authService.loadUserByUsername(authResult.getName());
        // o método create() da classe JWT é utilizado para criação de um novo token JWT
        String token = JWT.create()
                // o objeto authResult possui os dados do usuário autenticado, nesse caso o método getName() retorna o username do usuário foi autenticado no método attemptAuthentication.
                .withSubject(authResult.getName())
                //a data de validade do token é a data atual mais o valor armazenado na constante EXPIRATION_TIME, nesse caso 1 dia
                .withExpiresAt(
                    new Date(System.currentTimeMillis()  + SecurityConstants.EXPIRATION_TIME)
                )
                //Por fim é informado o algoritmo utilizado para assinar o token e por parâmetro a chave utilizada para assinatura. O Secret também pode ser alterado na classe SecurityConstants que armazena alguns dados de configuração do Spring Security
                .sign(Algorithm.HMAC512(SecurityConstants.SECRET));

        response.setContentType("application/json");

        response.getWriter().write(
                new ObjectMapper().writeValueAsString(
                        new AuthenticationResponse(token, new UserResponseDTO(user)))
        );

    }

    @Override
    protected AuthenticationSuccessHandler getSuccessHandler() {
        return super.getSuccessHandler();
    }
}
