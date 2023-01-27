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

import tn.spring.entity.AppUser;
import tn.spring.entity.Matiere;
import tn.spring.service.AppUserService;
import tn.spring.service.MatiereService;
 

@RestController
@RequestMapping("/matiere")
//hedhi mtaa angular bech ynajem yakra les services 
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MatiereController {

	@Autowired
	MatiereService MS;
	@Autowired 
	AppUserService US;
@GetMapping
public List<AppUser> aa (){
	return US.dddd();
}
	@PostMapping
	public Matiere add(@RequestBody Matiere m ) {
		return MS.add(m);
	}
	@GetMapping("/{id}")
	public List<Matiere> ll(@PathVariable("id") String id){
		return MS.show(id);
	}
	@GetMapping("/id/{id}")
	public Matiere ll(@PathVariable("id") int id){
		return MS.m(id);
	}
	@GetMapping("/all")
	public List<Matiere> sll(){
		return MS.show();
	}
	@GetMapping("/spec/{id}")
	public List<Matiere> dll(@PathVariable("id") int id){
		return MS.show(id);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		MS.delete(id);
	}
	@PutMapping("/update/{id}")
	public void update (@RequestBody Matiere m , @PathVariable("id") int id)
	{
		MS.update(m, id);
	}
	@PutMapping("/{idm}/{ids}")
	public void aff (@PathVariable("idm") int idm, @PathVariable("ids") int ids)
	{
		MS.aff(idm, ids);
	}
}
