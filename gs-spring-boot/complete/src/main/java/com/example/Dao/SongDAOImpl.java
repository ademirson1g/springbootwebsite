package com.example.Dao;

import java.util.List;

import com.example.bEntity.Song;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class SongDAOImpl implements SongDAO {

    

    @Autowired
    JdbcTemplate jdbcTemplateSong;

    @Override
    public Song findById(int song_id) {
        return jdbcTemplateSong.queryForObject("SELECT * FROM songs WHERE id=?", new BeanPropertyRowMapper<Song>(Song.class), song_id);
    }
    @Override
    public List<Song> findAll() {
            return jdbcTemplateSong.query("SELECT * FROM songs", new BeanPropertyRowMapper<Song>(Song.class));
        }
    @Override
    public int deleteById(int song_id) {
        return jdbcTemplateSong.update("DELETE FROM songs WHERE song_id = ?", song_id);
    }
    @Override
    public int save(Song song) {
        return jdbcTemplateSong.update("INSERT INTO songs (song_name, artist_name, song_url, song_rating, entered_date, last_edit_date, category_id, user_id) VALUES (?,?,?,?,?,?,?,?)", new Object[] {song.getSong_name(), song.getArtist_name(), song.getSong_url(), song.getSong_rating(), song.getEntered_date(), song.getLast_edit_date(),song.getCategory_id(), song.getUser_id()});
	}

    @Override
    public int update(Song song, int song_id) {
		return jdbcTemplateSong.update("UPDATE songs SET song_name = ?, artist_name = ?, song_url = ?, song_rating = ?, entered_date = ?, last_edit_date = ?, category_id = ?, user_id = ? WHERE song_id = ?", new Object[] {song.getSong_name(), song.getArtist_name(), song.getSong_url(), song.getSong_rating(), song.getEntered_date(), song.getLast_edit_date(), song.getCategory_id(), song.getUser_id(), song_id});
    }
    
    
    

}
