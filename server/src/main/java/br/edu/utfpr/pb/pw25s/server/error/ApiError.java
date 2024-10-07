package br.edu.utfpr.pb.pw25s.server.error;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Map;

@Data
@NoArgsConstructor
public class ApiError {

    private long timestamp = new Date().getTime();
    private int status;
    private String message;
    private String url;

    private Map<String, String> validationErrors;

    public ApiError(int status, String message, String url, Map<String, String> validationErrors) {
        this.status = status;
        this.message = message;
        this.url = url;
        this.validationErrors = validationErrors;
    }

    public ApiError(String message, String url, Integer status) {
        this.message = message;
        this.url = url;
        this.status = status;
    }
}
