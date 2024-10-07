package br.edu.utfpr.pb.pw25s.server.security;

import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private final AuthService authService;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,
                                  AuthService authService) {
        super(authenticationManager);
        this.authService = authService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {

        //Recuperar o token do Header(cabeçalho) da requisição
        String header = request.getHeader(SecurityConstants.HEADER_STRING);
        //Verifica se o token existe no cabeçalho
        if (header == null || !header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }
        //Chama o método getAuthentication e retorna o usuário autenticado para dar sequência na requisição
        UsernamePasswordAuthenticationToken authenticationToken =
                getAuthentication(request);
        //Adiciona o usuário autenticado no contexto do spring security
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(SecurityConstants.HEADER_STRING);

        //verifica se o token é válido e retorna o username
        String username = JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET))
                .build()
                .verify(token.replace(SecurityConstants.TOKEN_PREFIX, ""))
                .getSubject();

        if (username != null) {
            // com posse do username é verificado se ele existe na base de dados
            User user = (User) authService.loadUserByUsername(username);
            //caso exista o usuário é autenticado e a requisição continua a ser executada.
            return new UsernamePasswordAuthenticationToken(
                    user.getUsername(),
                    null,
                    user.getAuthorities());
        }
        // senão é retornado null, se a url que o usuário solicitou necessita de autenticação ele vai receber erro 401 - Unauthorized
        return null;
    }
}
