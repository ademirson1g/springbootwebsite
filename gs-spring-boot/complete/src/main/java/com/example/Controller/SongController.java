package com.example.Controller;

import java.util.List;

import com.example.Dao.SongDAO;
import com.example.bEntity.Song;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongController {

	@Autowired
	private SongDAO sdao;
    
    
    @GetMapping(path="/hw{song_id}")
    
    public Song findById(@PathVariable int song_id) {
        
        return sdao.findById(song_id);
        
 }
 
 @GetMapping("/hw")
 @CrossOrigin(origins = "http://localhost:3000") 

	public List<Song> findAll() {
		return sdao.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000") 
	@PutMapping("/update/{song_id}")
	public String update(@RequestBody Song e, @PathVariable int song_id) {
		return sdao.update(e, song_id)+" Song(s) updated successfully";
	}

	@CrossOrigin(origins = "http://localhost:3000") 
	@DeleteMapping("/delete/{song_id}")
	public String deleteById(@PathVariable int song_id) {
		return sdao.deleteById(song_id)+" Song(s) delete from the database";
	}
	
	@CrossOrigin(origins = "http://localhost:3000") 
	@PostMapping("/save")
	public String save(@RequestBody Song songes) {
		return sdao.save(songes)+" Song(s) saved successfully";
	}



}
