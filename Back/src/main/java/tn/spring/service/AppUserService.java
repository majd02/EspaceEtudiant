package tn.spring.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.spring.entity.AppUser;
import tn.spring.entity.AppUserRole;
import tn.spring.entity.ConfirmationToken;
import tn.spring.entity.Specialite;
import tn.spring.repository.ConfirmationTokenRepository;
import tn.spring.repository.SpecialiteRepo;
import tn.spring.repository.UserRepository;
@Service
@Slf4j
@AllArgsConstructor
public class AppUserService implements UserDetailsService {
	private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
	@Autowired
	UserRepository userRepository ;
	@Autowired
	BCryptPasswordEncoder bcpe ;
	@Autowired
	ConfirmationTokenService cfts ;
 @Autowired
 SpecialiteRepo sr;
	@Autowired
	EmailService ES; 
	@Autowired
	ConfirmationTokenRepository ctr;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		AppUser appuser =  userRepository.findByEmail(email)
				.orElseThrow(()-> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG , email )) );
		List<SimpleGrantedAuthority> role= Collections.singletonList(new SimpleGrantedAuthority(appuser.getAppUserRole().name()) ) ;
		return new User(appuser.getEmail(), appuser.getPassword(),appuser.isEnabled(),true,true,true,role);
	}
	public List<AppUser> dd (String email){
		AppUser a = userRepository.jibid(email);
		Specialite s = a.getSpecialite();
		
		return s.getAppusers();
	}
	public List<AppUser> dd (){
		return userRepository.hetuser("ROLE_CLIENT");
	}
	public List<AppUser> ddp (){
		return userRepository.hetuser("ROLE_PROF");
	}
	public List<AppUser> dda (){
		return userRepository.hetuser("ROLE_ADMIN");
	}
	public void delete(long id) {
		AppUser u = userRepository.findById(id).get();
		
		for(ConfirmationToken ct:ctr.findAll()) {
			if(ct.getAppUser()==u) {
				ctr.delete(ct);
			}
		}
		userRepository.deleteById(id);
	}
	public String SignUpUser(AppUser appuser,int id) {
		boolean exist = userRepository.findByEmail(appuser.getEmail()).isPresent();
		if (exist) {
			throw new IllegalStateException("email mawjoud ");
		}
		Specialite s = sr.findById(id).get();
		
		String encodedpassword= bcpe.encode(appuser.getPassword());
		appuser.setPassword(encodedpassword);
		appuser.setAppUserRole(AppUserRole.ROLE_CLIENT);
		appuser.setLocked(true);
		appuser.setEnabled(true);
		appuser.setSpecialite(s);

		appuser.setSpecialitenom(s.getNom());
		appuser.setFirstname(appuser.getFirstname());
		userRepository.save(appuser);
		//send confirmation token
		String token =UUID.randomUUID().toString();
		ConfirmationToken confirmationtoken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				appuser

				);
		cfts.saveConfirmationToken(confirmationtoken); 
		return token; 
	}

	public String SignUpUser(AppUser appuser) {
		boolean exist = userRepository.findByEmail(appuser.getEmail()).isPresent();
		if (exist) {
			throw new IllegalStateException("email mawjoud ");
		} 
		
		String encodedpassword= bcpe.encode(appuser.getPassword());
		appuser.setPassword(encodedpassword);
		appuser.setAppUserRole(AppUserRole.ROLE_PROF);
		appuser.setLocked(true);
		appuser.setEnabled(true);
		appuser.setFirstname(appuser.getFirstname());
		userRepository.save(appuser);
		//send confirmation token
		String token =UUID.randomUUID().toString();
		ConfirmationToken confirmationtoken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				appuser

				);
		cfts.saveConfirmationToken(confirmationtoken); 
		return token; 
	}

	
	public String SignUpADMIN(AppUser appuser) {
		boolean exist = userRepository.findByEmail(appuser.getEmail()).isPresent();
		if (exist) {
			throw new IllegalStateException("email mawjoud ");
		} 
		
		String encodedpassword= bcpe.encode(appuser.getPassword());
		appuser.setPassword(encodedpassword);
		appuser.setAppUserRole(AppUserRole.ROLE_ADMIN);
		appuser.setLocked(true);
		appuser.setEnabled(true);
		appuser.setFirstname(appuser.getFirstname());
		userRepository.save(appuser);
		//send confirmation token
		String token =UUID.randomUUID().toString();
		ConfirmationToken confirmationtoken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				appuser

				);
		cfts.saveConfirmationToken(confirmationtoken); 
		return token; 
	}

	
	
	public int enableAppUser(String email) {
		return userRepository.enableAppUser(email);
	}
	public List<AppUser> dddd() {
		return userRepository.findAll();
	}


 
	public void enableUser(Long id)
	{
		AppUser u =userRepository.findById(id).orElse(null);
		u.setEnabled(false);
		userRepository.save(u);
		
	}
	public void Admin(Long id)
	{
		AppUser u =userRepository.findById(id).orElse(null);
		u.setAppUserRole(AppUserRole.ROLE_ADMIN);
		userRepository.save(u);
		
	}

	/*   public JwtResponse authenticateUser(LoginRequest loginRequest) {

	        Authentication authentication = authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        String jwt = jwtUtils.generateJwtToken(authentication);

	        AppUser userDetails = (AppUser) authentication.getPrincipal();
	        List roles = userDetails.getAuthorities().stream()
	                .map(item -> item.getAuthority())
	                .collect(Collectors.toList());
	        return new JwtResponse(jwt,
	                userDetails.getId(),
	                userDetails.getUsername(),
	                userDetails.getEmail(),
	                roles);
	    }*/
	 
	 
}
