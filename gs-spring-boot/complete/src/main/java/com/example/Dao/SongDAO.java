package com.example.Dao;

import java.util.List;

import com.example.bEntity.Song;



public interface SongDAO {

    public List<Song> findAll();

    public Song findById(int song_id);

    public int deleteById(int song_id);
	
	public int save(Song song);
	
	public int update(Song song, int song_id);

    
    
}
