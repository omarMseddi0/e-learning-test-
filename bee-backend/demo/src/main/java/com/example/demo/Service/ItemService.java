package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Item;
import com.example.demo.Repository.ItemRepository;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    public Item updateItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public Item getItem(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
}