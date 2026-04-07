package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.mapper.ProductMapper;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.service.IProductService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("products")
public class ProductControllerV1 {
    private final IProductService productService;
    private final ProductMapper productMapper;

    public ProductControllerV1(IProductService productService, ProductMapper  productMapper) {
        this.productService = productService;
        this.productMapper = productMapper;
    }

    @PostMapping
    public ResponseEntity<ProductDTO> save(@RequestBody @Valid ProductDTO product) {
        Product productSaved = productService.save(productMapper.toEntity(product));
        return ResponseEntity.status(HttpStatus.CREATED).body(productMapper.toDto(productSaved));
    }

    @PutMapping
    public ResponseEntity<ProductDTO> update(@RequestBody @Valid ProductDTO product) {
        Product productSaved = productService.save(productMapper.toEntity(product));
        return ResponseEntity.status(HttpStatus.OK).body(productMapper.toDto(productSaved));
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        return ResponseEntity.ok(
                productService.findAll()
                        .stream()
                        .map(productMapper::toDto)
                        .collect(Collectors.toList())
        );
    }

    // http://localhost:8080/products/1
    // http://localhost:8080/products?id=1  @GetMapping("{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable Long id) {
        Product product = productService.findById(id);
        if (product != null) {
            return ResponseEntity.status(HttpStatus.OK).body(productMapper.toDto(product));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        productService.deleteById(id);
    }

    @GetMapping("count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.count());
    }

    @GetMapping("exists/{id}")
    public ResponseEntity<Boolean> exists(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.exists(id));
    }

    //http://localhost:8080/products/page?page=1&size=5
    @GetMapping("page")
    public ResponseEntity<Page<ProductDTO>> findPage(@RequestParam int page,
                                                  @RequestParam int size,
                                                  @RequestParam(required = false) String order,
                                                  @RequestParam(required = false) Boolean asc) {
        PageRequest pageRequest = PageRequest.of(page, size);
        if (order != null && asc != null) {
            pageRequest = PageRequest.of(page, size,
                    asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                productService.findAll(pageRequest).map(productMapper::toDto));
    }
}