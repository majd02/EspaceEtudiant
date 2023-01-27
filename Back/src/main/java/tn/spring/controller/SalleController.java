package tn.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.spring.entity.Salle;
import tn.spring.service.SalleService;
 

@RestController
@RequestMapping("/salle")

@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SalleController {
	@Autowired
	SalleService ps;
	@PostMapping
	public void add (@RequestBody Salle s) {
		ps.add(s);
	}
	@PutMapping("/{id}")
	public void up(@RequestBody Salle s,@PathVariable("id") int id) {
		ps.update(s, id);
	}
	@GetMapping("/all")
	public List<Salle> dd(){
		return ps.salles();
	}
	@GetMapping("/{id}")
	public List<Salle> dd(@PathVariable("id") int id){
		return ps.salles(id);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		ps.delete(id);
	}
	@GetMapping("/id/{id}")
public Salle sal(@PathVariable("id") int id) {
		return ps.sal(id);
	}
}
