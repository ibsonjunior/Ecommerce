package com.br.ecommerce.services;

import com.br.ecommerce.dtos.CategoryDto;
import com.br.ecommerce.dtos.ProductDto;
import com.br.ecommerce.entities.Category;
import com.br.ecommerce.entities.Product;
import com.br.ecommerce.repositories.CategoryRepository;
import com.br.ecommerce.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<ProductDto> searchAll() {
        List<Product> list = repository.findAll();
        return list.stream().map(x -> new ProductDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDto  searchById(Integer id) {
        Optional<Product> object = repository.findById(id);
        Product entity = object.get();
        return new ProductDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ProductDto insert(ProductDto dto) {
        Product entity = new Product();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProductDto(entity);
    }

    @Transactional
    public ProductDto update(Integer id, ProductDto dto) {
        Product entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProductDto(entity);
    }

    private void copyDtoForEntity(ProductDto dto, Product entity) {
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());
        entity.setImage(dto.getImage());
        entity.setPrice(dto.getPrice());

        entity.getCategories().clear();
        for (CategoryDto endDto : dto.getCategories()) {
            Category category = categoryRepository.getReferenceById(endDto.getId());
            entity.getCategories().add(category);
        }
    }
}
