package com.corsoangular.backend.controllers;

import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.corsoangular.backend.inputModels.InputLogin;
import com.corsoangular.backend.inputModels.InputSignin;
import com.corsoangular.backend.models.ApplicationUser;
import com.corsoangular.backend.models.User;
import com.corsoangular.backend.outputModels.LoginResponse;
import com.corsoangular.backend.outputModels.UserStatusResponse;
import com.corsoangular.backend.security.JwtUtils;
import com.corsoangular.backend.services.AccountService;

@RestController
@RequestMapping(path = "api/account", produces = "application/json")
public class AccountController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountService accountService;

    @Autowired
    JwtUtils jwtUtils;

    @Value("${backend.app.jwtCookieName}")
    private String jwtCookie;

    @GetMapping(value = "logout")
    public ResponseEntity<String> getLogout(HttpServletRequest request, HttpServletResponse response) {

        Cookie cookie = new Cookie(jwtCookie, null);
        cookie.setMaxAge(0);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        response.addCookie(cookie);

        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "status")
    public ResponseEntity<Optional<UserStatusResponse>> getStatus(@AuthenticationPrincipal ApplicationUser user) {

        UserStatusResponse response = new UserStatusResponse();

        response.setEmail(user.getUser().getEmail());
        response.setFirstname(user.getUser().getFirstname());
        response.setLastname(user.getUser().getLastname());
        response.setId(user.getUser().getId());
        response.setRole(user.getUser().getRole());

        return ResponseEntity.ok().body(Optional.of(response));
    }

    @PostMapping(value = "login")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public ResponseEntity<LoginResponse> postLogin(HttpServletRequest request, HttpServletResponse response,
            @Valid @RequestBody InputLogin model)
            throws Exception {

        try {

            Authentication auth = new UsernamePasswordAuthenticationToken(model.getEmail(), model.getPassword());
            authenticationManager.authenticate(auth);

            SecurityContextHolder.getContext().setAuthentication(auth);

            String jwt = jwtUtils.generateJwtToken(auth);

            Cookie cookie = new Cookie(jwtCookie, jwt);
            cookie.setMaxAge(60 * 24 * 30);
            cookie.setSecure(true);
            cookie.setHttpOnly(true);
            cookie.setPath("/");

            response.addCookie(cookie);

            Optional<User> user = accountService.getUserByEmail(model.getEmail());

            if (user.isPresent()) {
                UserStatusResponse userResponse = new UserStatusResponse();

                userResponse.setEmail(user.get().getEmail());
                userResponse.setFirstname(user.get().getFirstname());
                userResponse.setLastname(user.get().getLastname());
                userResponse.setRole(user.get().getRole());

                return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON)
                        .body(new LoginResponse("Login success", userResponse));
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.APPLICATION_JSON)
                        .body(new LoginResponse("Login failed", null));
            }

        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.APPLICATION_JSON)
                    .body(new LoginResponse("Login failed", null));
        }

    }

    @PostMapping(value = "signin")
    public String postSignin(@Valid @RequestBody InputSignin model) {

        User user = this.accountService.createUser(model, passwordEncoder);
        return user.getId().toString();
    }

}
