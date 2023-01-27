package tn.spring.repository;
 
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.spring.entity.Matiere;

@Repository
public interface MatiereRepo extends CrudRepository<Matiere , Integer> {

}
