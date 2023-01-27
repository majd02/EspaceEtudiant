package tn.spring.entity;

import org.springframework.security.core.GrantedAuthority;

public enum AppUserRole implements GrantedAuthority {
  ROLE_ADMIN, ROLE_CLIENT,ROLE_PROF;

  public String getAuthority() {
    return name();
  }

}
