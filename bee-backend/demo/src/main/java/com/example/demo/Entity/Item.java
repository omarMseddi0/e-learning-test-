package com.example.demo.Entity;

import jakarta.persistence.Id;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String imagePath;
    private String title;
    private double price;
    public Long getId() {
        return id;
    }
    public String getImagePath() {
        return imagePath;
    }
    public String getTitle() {
        return title;
    }
    public double getPrice() {
        return price;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
