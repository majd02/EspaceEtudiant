package tn.spring.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import tn.spring.entity.AppUser;
import tn.spring.entity.Matiere;
import tn.spring.entity.Planing;
import tn.spring.entity.Salle;
import tn.spring.repository.MatiereRepo;
import tn.spring.repository.PlaningRepo;
import tn.spring.repository.SalleRepo;
import tn.spring.repository.UserRepository;
 

@Service 
public class PlaningService {
@Autowired
PlaningRepo pr; 
@Autowired
SalleRepo sr ;
@Autowired 
MatiereRepo mr;

@Autowired 
UserRepository ur;
public void add(Planing pl,int idm , int ids,long idu) {

	AppUser u = ur.findById(idu).get();
	Matiere m = mr.findById(idm).get();
	Salle s= sr.findById(ids).get();
	pl.setUser(u);
	boolean b=true;
	boolean b1=true;
	List<Planing> plgs= (List<Planing>) pr.findAll();
	for (Planing p:plgs) {
		
		
		if ((p.getUser().getId()==idu) )
		{
			
			if ((p.getDatedebut().getTime()==pl.getDatedebut().getTime()) )
		{     
				b=false;
		}
			
			
			
		} else {
			b=true;
		}
		if ((p.getSalle().getId()==ids) )
		{
			
			if ((p.getDatedebut().getTime()==pl.getDatedebut().getTime()) )
		{     
				b1=false;
		}
			
			
			
		} else {
			b1=true;
		}
	}
	if (b && b1) {
		pl.setNumero(s.getNumero());
		pl.setNommatiere(m.getNom());
		
		pl.setProfname(u.getFirstname());
		pl.setMatiere(m);
		pl.setSalle(s);
		pr.save(pl);
	}
	
	
	
	}
public void delete(int id) {
pr.deleteById(id);	
}
public Set<Planing> show (String id){
	AppUser u = ur.jibid(id);
	Set<Planing> ss = new HashSet<>();
	List<Matiere> MS =u.getSpecialite().getMatieres();
	    for(Matiere m:MS){
		for(Planing pl :pr.findAll()){
		if(m.getPlanings()!=null) 
		ss.addAll(m.getPlanings());
		}
		}
	return ss;
}
public List<Planing> pr(){
	return (List<Planing>) pr.findAll();
}
public Planing pr1(int id){
	Planing p =  pr.findById(id).get();
	return p;
}
public void update(Planing p , int id,int idm , int ids) {
	Matiere m = mr.findById(idm).get();
	Salle s= sr.findById(ids).get();
	Planing pl = pr.findById(id).get();
	pl.setDatedebut(p.getDatedebut());
	pl.setDuree(p.getDuree());
	pl.setMatiere(m);
	pl.setSalle(s);
	pl.setNommatiere(m.getNom());
	pl.setNumero(s.getNumero());
	pr.save(pl);
}
public List<Planing> profplanings(String email)
{
	AppUser u = ur.jibid(email);
	List<Planing> s = new ArrayList<Planing>();
	List<Planing> ls = (List<Planing>) pr.findAll();
	for (Planing p:ls) {
		System.out.println("d4");
		System.out.println(u.getId());
		if(p.getUser().getId()== u.getId()) {
			System.out.println("d");
			s.add(p);
		}
	}
	return s;
	
}
}
