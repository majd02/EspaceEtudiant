package tn.spring.repository;
 
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.spring.entity.Salle;
 

@Repository
public interface SalleRepo extends CrudRepository<Salle, Integer>{

}
