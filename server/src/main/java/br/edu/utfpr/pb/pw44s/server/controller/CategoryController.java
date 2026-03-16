package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("categories")
public class CategoryController extends CrudController<Category, CategoryDTO, Long> {

    private final CategoryMapper categoryMapper;

    public CategoryController(ICategoryService categoryService, CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
        CategoryController.categoryService = categoryService;
    }

    private static ICategoryService categoryService;

    @Override
    protected ICrudService<Category, Long> getService() {
        return categoryService;
    }

    @Override
    protected CategoryDTO toDto(Category entity) {
        return categoryMapper.toDto(entity);
    }

    @Override
    protected Category toEntity(CategoryDTO dto) {
        return categoryMapper.toEntity(dto);
    }
}
