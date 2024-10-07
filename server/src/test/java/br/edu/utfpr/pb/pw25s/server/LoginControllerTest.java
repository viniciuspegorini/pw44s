package br.edu.utfpr.pb.pw25s.server;

import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.repository.UserRepository;
import br.edu.utfpr.pb.pw25s.server.security.SecurityConstants;
import br.edu.utfpr.pb.pw25s.server.security.dto.AuthenticationResponse;
import br.edu.utfpr.pb.pw25s.server.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class LoginControllerTest {

    private static final String URL_LOGIN = "/login";
    private static final String URL_USER_INFO = "/login/user-info";


    @Autowired
    TestRestTemplate testRestTemplate;
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;

    @BeforeEach
    public void cleanup() {
        userRepository.deleteAll();
        testRestTemplate.getRestTemplate().getInterceptors().clear();
    }

    @Test
    public void postLogin_withoutUserCredentials_receiveUnauthorized() {
        ResponseEntity<Object> response = login(Object.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    public void postLogin_withInvalidUserCredentials_receiveUnauthorized() {
        ResponseEntity<Object> response = login(createValidUser(), Object.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    public void postLogin_withValidUserCredentials_receiveOK() {
        userService.save(createValidUser());

        ResponseEntity<Object> response = login(createValidUser(), Object.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void postLogin_withValidUserCredentials_receiveToken() {
        userService.save(createValidUser());

        ResponseEntity<AuthenticationResponse> response = login(createValidUser(), AuthenticationResponse.class);
        assertThat(response.getBody().getToken()).isNotNull();
    }

    @Test
    public void postLogin_withValidUserCredentials_receiveLoggedInUserDTO() {
        User user = userService.save(createValidUser());
        ResponseEntity<AuthenticationResponse> responseToken = login(createValidUser(), AuthenticationResponse.class);
        ResponseEntity<UserDTO> response = getUserInfo(responseToken.getBody().getToken(), UserDTO.class);
        assertThat(response.getBody().getUsername()).isEqualTo(user.getUsername());
    }

    private User createValidUser() {
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test-display");
        user.setPassword("P4ssword");
        return user;
    }

    public <T> ResponseEntity<T> login(Class<T> responseType) {
        return testRestTemplate.postForEntity(URL_LOGIN, null, responseType);
    }

    public <T> ResponseEntity<T> login(Object request, Class<T> responseType) {
        return testRestTemplate.postForEntity(URL_LOGIN, request, responseType);
    }

    public <T> ResponseEntity<T> getUserInfo(String token,
                                             Class<T> responseType) {
        HttpEntity<String> entity = new HttpEntity<String>("parameters",createHttpHeaders(token));

        return testRestTemplate.exchange(URL_USER_INFO, HttpMethod.GET, entity, responseType);
    }

    public HttpHeaders createHttpHeaders(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add(SecurityConstants.HEADER_STRING,SecurityConstants.TOKEN_PREFIX + accessToken);
        return headers;
    }

}

