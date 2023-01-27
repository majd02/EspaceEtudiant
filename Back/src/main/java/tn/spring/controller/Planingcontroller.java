package tn.spring.controller;

import java.util.List;
import java.util.Set;

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

import tn.spring.entity.Planing;
import tn.spring.service.PlaningService;
 

@RestController
@RequestMapping("/planing")

@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Planingcontroller {
	@Autowired
	PlaningService ps;
	
	@GetMapping("/{id}")
	public Set<Planing> dd(@PathVariable("id") String id){
		return ps.show(id);
	}
	@GetMapping()
	public List<Planing> dd(){
		return ps.pr();
	}
	@GetMapping("/id/{id}")
	public Planing a(@PathVariable("id") int id){
		return ps.pr1(id);
	}
	@GetMapping("/own/{id}")
	public List<Planing> as(@PathVariable("id") String id){
		return ps.profplanings(id);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		ps.delete(id);
	}
	@PostMapping("/{idm}/{ids}/{idu}")
	public void add(@RequestBody Planing p,@PathVariable("idm")int idm,@PathVariable("ids")int ids,@PathVariable("idu")long idu) {
		ps.add(p, idm, ids,idu);
	}
	@PutMapping("/{id}/{idm}/{ids}")
	public void ad(@RequestBody Planing p,@PathVariable("id")int id,@PathVariable("idm")int idm,@PathVariable("ids")int ids ) {
		ps.update(p,id, idm, ids);
	}

}
