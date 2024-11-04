package br.edu.utfpr.pb.pw44s.server.error;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.Map;

@RestController
public class ErrorHandler implements ErrorController {

    private final ErrorAttributes errorAttributes;

    public ErrorHandler(ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes;
    }

    @RequestMapping("error")
    public ApiError handlerError(WebRequest webRequest, HttpServletResponse response) {
        Map<String, Object> attributes = errorAttributes.getErrorAttributes(webRequest,
                                            ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE));

        if (attributes.get("status") == null) {
            attributes.put("status", response.getStatus());
        }

        return new ApiError( (String) attributes.get("message"),
                             (String) attributes.get("path"),
                             (Integer) attributes.get("status")
                            );
    }
}
