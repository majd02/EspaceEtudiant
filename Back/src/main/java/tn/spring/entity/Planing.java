package tn.spring.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Planing {

	private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	@DateTimeFormat(pattern = "dd-mm-yyyy") 
	private Date datedebut;
	private String  duree;

	private String  heure;
	@JsonIgnore
	@OneToOne
	private Salle salle ;
	@OneToOne
	private AppUser user;
	private String profname;
	private int numero;
	@JsonIgnore
	 @ManyToOne
	    private Matiere matiere;
	 private String nommatiere ;
}
