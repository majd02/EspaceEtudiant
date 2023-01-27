package tn.spring.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

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
public class Matiere {

	private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	private String nom ; 
	private int coef;
	@JsonIgnore
    @OneToMany (mappedBy = "matiere")
	private List<Planing> planings;
	@JsonIgnore
    @ManyToMany (mappedBy = "matieres",cascade = CascadeType.ALL)
	private List<Specialite> specialites ;
	public Matiere(int id, String nom, int coef) {
		super();
		this.id = id;
		this.nom = nom;
		this.coef = coef;
	}
	

}
