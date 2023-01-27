package tn.spring.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.spring.entity.Specialite;
 

@Repository
public interface SpecialiteRepo extends CrudRepository<Specialite,Integer> {

}
