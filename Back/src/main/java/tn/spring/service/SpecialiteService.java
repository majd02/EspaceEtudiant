package tn.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import tn.spring.entity.AppUser;
import tn.spring.entity.Specialite;
import tn.spring.repository.SpecialiteRepo;
import tn.spring.repository.UserRepository;
 
@Service
public class SpecialiteService implements IspecialiteService {

	@Autowired
	SpecialiteRepo SR;

	@Autowired
	UserRepository UR;
	
	@Override
	public void add(Specialite s) {
		
		SR.save(s);
	}
	public Specialite ss(int id) {
		Specialite s= SR.findById(id).get();
		return s;
	}

	@Override
	public void delete(int id) {
		
		SR.deleteById(id);
		
	} 
	public void update(Specialite s,int id) {
	Specialite sp=	SR.findById(id).get();
	sp.setNom(s.getNom());
	SR.save(sp);
	}
	public List<Specialite> show (){
		
		return (List<Specialite>) SR.findAll() ;
	}
	 
	public Specialite show (String id){
		AppUser u = UR.jibid(id);
		return u.getSpecialite() ;
	}

}
