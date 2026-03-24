package br.edu.utfpr.pb.pw44s.server;

import br.edu.utfpr.pb.pw44s.server.model.User;
import br.edu.utfpr.pb.pw44s.server.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.TestRestTemplate;
import org.springframework.boot.resttestclient.autoconfigure.AutoConfigureTestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment =
        SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureTestRestTemplate
public class UserControllerTest {

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    UserRepository userRepository;

    @BeforeEach
    public void cleanup() {
        userRepository.deleteAll();
    }

    //methodName_condition_expectedBehaviour
    @Test
    public void postUser_whenUserIsValid_receiveCREATED() {
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test-Display");
        user.setPassword("P4ssword");

        ResponseEntity<Object> response =
                testRestTemplate.postForEntity("/users", user, Object.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void putUser_whenUserIsValid_userSavedToDatabase() {
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test-Display");
        user.setPassword("P4ssword");

        ResponseEntity<Object> response =
                testRestTemplate.postForEntity("/users", user, Object.class);

        assertThat(userRepository.count()).isEqualTo(1);
    }

    @Test
    public void putUser_whenUserIsValid_passwordIsHashedInDatabase() {
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test-Display");
        user.setPassword("P4ssword");

        testRestTemplate.postForEntity("/users", user, Object.class);

        List<User> users = userRepository.findAll();
        User userDB =  users.get(0);

        assertThat(user.getPassword()).isNotEqualTo(userDB.getPassword());
    }

    @Test
    public void putUser_whenUserHasNullUsername_receiveBadRequest() {
        User user = new User();
        user.setUsername( null );
        user.setDisplayName("test-Display");
        user.setPassword("P4ssword");

        ResponseEntity<Object> response =
                testRestTemplate.postForEntity("/users", user, Object.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void putUser_whenUserHasUsernameWithLessThanRequired_receiveBadRequest() {
        User user = new User();
        user.setUsername( "abc" );
        user.setDisplayName("test-Display");
        user.setPassword("P4ssword");

        ResponseEntity<Object> response =
                testRestTemplate.postForEntity("/users", user, Object.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

}