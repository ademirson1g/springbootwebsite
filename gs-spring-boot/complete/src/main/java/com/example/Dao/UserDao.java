package com.example.Dao;

import java.util.List;

import com.example.bEntity.User;


public interface UserDao {

    public List<User> findAll();


    public User findByusername(String username);
    
    public User findByPassword(String password);

    public User login( String username, String password);

    

    
}
