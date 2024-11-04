package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("categories")
public class CategoryController extends CrudController<Category, CategoryDTO, Long> {
    private static ICategoryService categoryService;
    private static ModelMapper modelMapper;

    public CategoryController(ICategoryService categoryService,
                              ModelMapper modelMapper) {
        super(Category.class, CategoryDTO.class);
        CategoryController.categoryService = categoryService;
        CategoryController.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<Category, Long> getService() {
        return CategoryController.categoryService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return CategoryController.modelMapper;
    }
}
