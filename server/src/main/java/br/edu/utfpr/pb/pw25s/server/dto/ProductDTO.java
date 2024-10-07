package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class ProductDTO {

    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private BigDecimal price;

    private CategoryDTO category;
}
