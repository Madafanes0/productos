package com.products.api.service;

import com.products.api.model.Product;
import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ProductService {
    List<Product> getAllProducts() throws ExecutionException, InterruptedException;
    Product getProductById(String id) throws ExecutionException, InterruptedException;
    Product createProduct(Product product) throws ExecutionException, InterruptedException;
    Product updateProduct(String id, Product product) throws ExecutionException, InterruptedException;
    void deleteProduct(String id) throws ExecutionException, InterruptedException;
} 