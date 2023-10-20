package br.com.estudio.estudio.model;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_user")
public class UserModel {

  @Id
  @GeneratedValue(generator = "UUID")
  private UUID id;
  private String email;
  private String name;
  private String password;
  private String grau_form;
  private String temp_form;
  private Integer qtd_mat;
  private LocalDateTime dat_inicio;
  private LocalDateTime dat_final;

  // @CreationTimestamp
  // private LocalDateTime createdAt;
}
