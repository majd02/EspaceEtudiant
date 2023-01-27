package tn.spring.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import tn.spring.entity.AppUser;
import tn.spring.entity.Matiere;
import tn.spring.entity.Specialite;
import tn.spring.repository.MatiereRepo;
import tn.spring.repository.SpecialiteRepo;
import tn.spring.repository.UserRepository;
 

@Service
public class MatiereService {

@Autowired 
MatiereRepo mr;
@Autowired
SpecialiteRepo spr;
@Autowired
UserRepository appr;

public void add(Matiere m , int ids) {
	m.getSpecialites().add(spr.findById(ids).get());
	
	mr.save(m);
}
public Matiere m (int id) {
	Matiere f = mr.findById(id).get();
	return f;
}
public Matiere add(Matiere m ) {
	
	return mr.save(m);
}
public void aff(int idm ,int ids ) {

	Matiere f = mr.findById(idm).get();

	Specialite s = spr.findById(ids).get();
	s.getMatieres().add(f);
	spr.save(s);
}
public List<Matiere> show (){
	return (List<Matiere>) mr.findAll();
}
public List<Matiere> show (int ids){
	Specialite s = spr.findById(ids).get();
	return s.getMatieres();}
public List<Matiere> show (String ide){
	
AppUser s = appr.jibid(ide);
	return s.getSpecialite().getMatieres();}
public void delete(int id) {
	mr.deleteById(id);
}
public Matiere update(Matiere m , int id ) {
	Matiere mt = mr.findById(id).get();
	mt.setCoef(m.getCoef());
	mt.setNom(m.getNom());
	return mr.save(mt);}
}