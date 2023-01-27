package tn.spring.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import tn.spring.entity.AppUser;

import org.springframework.stereotype.Repository;

@Transactional(readOnly = true )
@Repository
public interface UserRepository extends JpaRepository<AppUser, Long> {

	Optional<AppUser> findByEmail(String email);
	Optional<AppUser> findById(String email);

@Modifying
@Query("UPDATE AppUser a " +
        "SET a.enabled = TRUE WHERE a.email = ?1")
int enableAppUser(String email);
@Query(value =" Select CONCAT(firstname, lastname) from app_user  where email=:email", nativeQuery = true)
public String username(@Param("email") String email);
@Query(value =" Select * from app_user  where email=:email", nativeQuery = true)
public AppUser jibid(@Param("email") String email);
@Query(value =" Select * from app_user  where app_user_role=:email", nativeQuery = true)
public List<AppUser> hetuser(@Param("email") String email);
}
