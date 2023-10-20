package br.com.estudio.estudio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import at.favre.lib.crypto.bcrypt.BCrypt;
import br.com.estudio.estudio.model.UserModel;
import br.com.estudio.estudio.repository.IUserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private IUserRepository iUserRepository;

  // Create User
  @PostMapping("/")
  public ResponseEntity create(@RequestBody UserModel userModel) {
    var userId = userModel.getId();
    var userPassword = userModel.getPassword();

    if(userId != null) {
      ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exist.");
    }

    // Hashing password
    var hashedPassword = BCrypt.withDefaults().
    hashToString(8, userPassword.toCharArray());

    // Setting password
    userModel.setPassword(hashedPassword);

    var userCreated =  this.iUserRepository.save(userModel);
    return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);

  }

}
