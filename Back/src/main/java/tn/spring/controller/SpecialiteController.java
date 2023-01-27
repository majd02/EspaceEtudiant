package tn.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.spring.entity.Matiere;
import tn.spring.entity.Specialite;
import tn.spring.service.SpecialiteService;
 

@RestController
@RequestMapping("/Specialite")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SpecialiteController {

	@Autowired
	SpecialiteService SS;
	 
	@PostMapping(path="/add")
	public void ajout(@RequestBody Specialite s) {
		SS.add(s);
	}
	@PutMapping("/update/{id}")
	public void update (@RequestBody Specialite m , @PathVariable("id") int id)
	{
		SS.update(m, id);
	}
	@GetMapping("/id/{id}")
	public Specialite ll(@PathVariable("id") int id){
		return SS.ss(id);
	}
	@GetMapping
	public List<Specialite> show(){
		return SS.show();
	}
	@GetMapping("/{id}")
	public Specialite show(@PathVariable("id") String id){
		return SS.show(id);
	}
	@DeleteMapping("/{id}")
	public void dlt(@PathVariable("id") int id) {
		SS.delete(id);
	}
	
	
	
}
