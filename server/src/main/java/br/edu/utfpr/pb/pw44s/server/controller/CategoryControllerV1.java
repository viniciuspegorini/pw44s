package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
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
@RequestMapping("categories-v1")
public class CategoryControllerV1 {
    private final ICategoryService categoryService;
    private final CategoryMapper categoryMapper;

    public CategoryControllerV1(ICategoryService categoryService, CategoryMapper categoryMapper) {
        this.categoryService = categoryService;
        this.categoryMapper = categoryMapper;
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> save(@RequestBody @Valid CategoryDTO category) {
        Category categorySaved = categoryService.save(categoryMapper.toEntity(category));
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryMapper.toDto(categorySaved));
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> update(@RequestBody @Valid CategoryDTO category) {
        Category categorySaved = categoryService.save(categoryMapper.toEntity(category));
        return ResponseEntity.status(HttpStatus.OK).body(categoryMapper.toDto(categorySaved));
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> findAll() {
        return ResponseEntity.ok(
                categoryService.findAll()
                        .stream()
                        .map(categoryMapper::toDto)
                        .collect(Collectors.toList())
        );
    }

    // http://localhost:8080/categories/1
    // http://localhost:8080/categories?id=1
    @GetMapping("{id}")
    public ResponseEntity<Category> findById(@PathVariable Long id) {
        Category category = categoryService.findById(id);
        if (category != null) {
            return ResponseEntity.status(HttpStatus.OK).body(category);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categoryService.deleteById(id);
    }

    @GetMapping("count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.count());
    }

    @GetMapping("exists/{id}")
    public ResponseEntity<Boolean> exists(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.exists(id));
    }
    //http://localhost:8080/categories/page?page=1&size=5
    @GetMapping("page")
    public ResponseEntity<Page<Category>> findPage(@RequestParam int page,
                                                   @RequestParam int size,
                                                   @RequestParam(required = false) String order,
                                                   @RequestParam(required = false) Boolean asc) {
        PageRequest pageRequest = PageRequest.of(page, size);
        if (order != null && asc != null) {
            pageRequest = PageRequest.of(page, size,
                    asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                categoryService.findAll(pageRequest));
    }
}
