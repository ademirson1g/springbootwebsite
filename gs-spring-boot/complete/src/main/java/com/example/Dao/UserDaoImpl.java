package com.example.Dao;

import java.util.List;

import com.example.bEntity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class UserDaoImpl implements UserDao {

    @Autowired
    JdbcTemplate jdbcTemplateUser;

    @Override
    public User findByusername(String username) {

        return jdbcTemplateUser.queryForObject("SELECT * FROM users WHERE username=?", new BeanPropertyRowMapper<User>(User.class), username);
    }

    @Override
    public List<User> findAll() {
        return jdbcTemplateUser.query("SELECT * FROM users", new BeanPropertyRowMapper<User>(User.class));
    }

    

    @Override
    public User login(String username, String password) {
        
        return jdbcTemplateUser.queryForObject("SELECT * FROM users WHERE username=? AND password=?", new BeanPropertyRowMapper<User>(User.class), username, password);
    }

    @Override
    public User findByPassword(String password) {
        
        return jdbcTemplateUser.queryForObject("SELECT * FROM users WHERE password=?", new BeanPropertyRowMapper<User>(User.class), password);
    }
}
