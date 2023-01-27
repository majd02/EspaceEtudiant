package tn.spring.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import tn.spring.entity.Planing;
import tn.spring.entity.Salle;
import tn.spring.repository.MatiereRepo;
import tn.spring.repository.PlaningRepo;
import tn.spring.repository.SalleRepo;
import tn.spring.repository.UserRepository;
 

@Service
public class SalleService {

	@Autowired
	SalleRepo sr; 
	
	@Autowired
	PlaningRepo pr;
	@Autowired 
	MatiereRepo mr;
	@Autowired
	UserRepository ur;
	
	public void add(Salle s ) {
		sr.save(s);
	}
	public Salle sal(int id) {
		Salle s = sr.findById(id).get();
		return s;
	}
	public void delete(int id) {
		sr.deleteById(id);
	}
	public void update(Salle s ,int id) {
		Salle sl = sr.findById(id).get();
		sl.setNumero(s.getNumero());
		sl.setStatus(s.getStatus());;
		sr.save(sl);
	}
	public List<Salle> salles(){
		return  (List<Salle>) sr.findAll();
	}
	

public List<Salle> salles(int id){
	List<Salle> s = new ArrayList<Salle>();
	Planing p = pr.findById(id).get();
	s.add(p.getSalle());
	return s;
	
}
}
