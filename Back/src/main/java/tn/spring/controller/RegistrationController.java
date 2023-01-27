package tn.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.azure.core.annotation.Get;

import lombok.AllArgsConstructor;
import retrofit2.http.Path;
import tn.spring.entity.AppUser;
import tn.spring.entity.LoginRequest;
import tn.spring.entity.RegistrationRequest;
import tn.spring.service.AppUserService;
import tn.spring.service.AuthenticationService;
import tn.spring.service.RegistartionService;
import tn.spring.util.payload.JwtResponse;

@RestController
@RequestMapping(path="api/v1/registartion")
@AllArgsConstructor

@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RegistrationController {
	@Autowired 
	RegistartionService RS;
	@Autowired 
	AppUserService US;
@Autowired
PasswordEncoder encoder;
@Autowired
PasswordEncoder authService;
@Autowired
AuthenticationService authenticationService;


@GetMapping("/coll/{id}")
public List<AppUser> aa(@PathVariable("id")String id ){
	return US.dd(id);
}
@GetMapping("/et/")
public List<AppUser> aa(){
	return US.dd();
}
@GetMapping("/pr/")
public List<AppUser> daa(){
	return US.ddp();
}
@GetMapping("/add/")
public List<AppUser> ddaa(){
	return US.dda();
}
@DeleteMapping("/delete/{id}")
public void delete(@PathVariable("id") long id) {
	US.delete(id);
}
@PostMapping("/{id}")
public String signup(@RequestBody RegistrationRequest request,@PathVariable("id") int id)
{
	return RS.register(request,id);
	
}

@PostMapping("/prof")
public String signupp(@RequestBody RegistrationRequest request)
{
	return RS.registerprof(request);
	
}
@PostMapping("/Admin")
public String signup(@RequestBody RegistrationRequest request)
{
	return RS.registeradd(request);
	
}


@PostMapping(path="login")
public JwtResponse signin(@RequestBody LoginRequest request)
{
	return authenticationService.authenticateUser(request);
}
@GetMapping(path="confirm")
public String confimr(@RequestParam("token") String token) {
	return RS.confirmToken(token);
}


	
}
