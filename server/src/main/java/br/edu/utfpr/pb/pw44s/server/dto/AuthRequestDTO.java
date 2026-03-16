package br.edu.utfpr.pb.pw44s.server.dto;

import lombok.Data;

@Data
public class AuthRequestDTO {

    private String username;

    private String password;
}
