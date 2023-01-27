package tn.spring.entity;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import tn.spring.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.spring.entity.*;
@Getter
@Setter 
@Entity
public class AppUser implements UserDetails{
 
	private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	private String firstname ;
	private String lastname ;
	private String email ;
	private String specialitenom ;
	 @JsonIgnore
	private String password ;
	 @JsonIgnore
	private int points;
	 @JsonIgnore
	  @ManyToOne
	   private Specialite specialite;



	public int getWarningNum() {
		return warningNum;
	}






	public void setWarningNum(int warningNum) {
		this.warningNum = warningNum;
	}






	 





	 @JsonIgnore
 
	private int warningNum;

 


@JsonIgnore
@Enumerated(EnumType.STRING)
	private AppUserRole appUserRole;
	public String getFirstname() {
	return firstname;
}






public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public Boolean getLocked() {
	return locked;
}

public void setLocked(Boolean locked) {
	this.locked = locked;
}
 
public static long getSerialversionuid() {
	return serialVersionUID;
}
@JsonIgnore
	private Boolean locked ;
@JsonIgnore
	private Boolean enabled;
 
	
	public AppUser() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public AppUser(String firstname, String lastname, String email, String password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}
	 @JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(appUserRole.name());
		
		return Collections.singletonList(authority);
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	 

	@Override
	public String getPassword() { 
		return password;
	}

	@Override
	public String getUsername() { 
		return email;
	}
@JsonIgnore
	@Override
	public boolean isAccountNonExpired() { 
		return true;
	}
@JsonIgnore
	@Override
	public boolean isAccountNonLocked() { 
		return !locked;
	}
	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() { 
		return true;
	}

	@Override
	public boolean isEnabled() { 
		return enabled;
	}

 
 
	

}
