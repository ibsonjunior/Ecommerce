package com.br.ecommerce.services;
import com.br.ecommerce.dtos.CategoryDto;
import com.br.ecommerce.entities.Category;
import com.br.ecommerce.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // Search All
    @Transactional(readOnly = true)
    public List<CategoryDto> searchAll() {
        List<Category> list =  categoryRepository.findAll();
        return list.stream().map(x -> new CategoryDto(x)).collect(Collectors.toList());
    }

    // Search by Id
    @Transactional(readOnly = true)
    public CategoryDto searchById(Integer id) {
        Optional<Category> object = categoryRepository.findById(id);
        Category entity = object.get();
        return new CategoryDto(entity);
    }

    // Insert
    @Transactional
    public CategoryDto insert(CategoryDto dto) {
        Category entity = new Category();
        copyDtoForEntity(dto, entity);
        entity = categoryRepository.save(entity);
        return new CategoryDto(entity);
    }

    //Update
    @Transactional
    public CategoryDto update(Integer id, CategoryDto dto) {
        Category entity = categoryRepository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = categoryRepository.save(entity);
        return new CategoryDto(entity);
    }

    // delete
    public void delete(Integer id) {
        categoryRepository.deleteById(id);
    }

    //Model
    private void  copyDtoForEntity(CategoryDto dto, Category entity) {
        entity.setName(dto.getName());
    }
}
