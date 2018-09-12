package com.dispositivos.main.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dispositivos.main.entities.Dispositivos;
import com.dispositivos.main.exception.ResourceNotFoundException;
import com.dispositivos.main.repository.DispositivoRespository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DispositivosController {

	@Autowired
	DispositivoRespository dispositivosRepository;
	
	// Get All Dispositivos
	@GetMapping("/dispositivos")
	public List<Dispositivos> getAllDispositivos() {
	    return dispositivosRepository.findAll();
	}
	
	// Create a new Dispositivo
	@PostMapping("/addDispositivo")
	public Dispositivos createNote(@Valid @RequestBody Dispositivos note) {
	    return dispositivosRepository.save(note);
	}
	// Get a Single Dispositivo
	@GetMapping("/dispositivo/{id}")
	public Dispositivos getNoteById(@PathVariable(value = "id") Long noteId) {
	    return dispositivosRepository.findById(noteId)
	            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));
	}
	
	// Update a Note
	@PutMapping("/dispositivo/{id}")
	public Dispositivos updateNote(@PathVariable(value = "id") Long noteId,
	                                        @Valid @RequestBody Dispositivos noteDetails) {

		Dispositivos note = dispositivosRepository.findById(noteId)
	            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

	    note.setTitle(noteDetails.getTitle());
	    note.setContent(noteDetails.getContent());

	    Dispositivos updatedNote = dispositivosRepository.save(note);
	    return updatedNote;
	}
	
	// Delete a Note
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long noteId) {
	    Dispositivos note = dispositivosRepository.findById(noteId)
	            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

	    dispositivosRepository.delete(note);

	    return ResponseEntity.ok().build();
	}
}
