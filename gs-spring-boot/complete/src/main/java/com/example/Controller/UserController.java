package com.example.Controller;

import java.util.List;

import com.example.Dao.UserDao;
import com.example.bEntity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired 
    private UserDao udao;

    

    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping(path="/loginss/{username, password}")
    public User loginss(@PathVariable String username, String password) {  
        System.out.println(username);
        return udao.login(username, password);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
	public User login(@RequestBody User user) {
        return udao.login(user.getUsername(), user.getPassword());
	}

     @GetMapping("/ami")
     public List<User> findAll() {
       return udao.findAll();
        }
        
       


}

