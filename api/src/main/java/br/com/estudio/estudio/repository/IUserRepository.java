package br.com.estudio.estudio.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.estudio.estudio.model.UserModel;

public interface IUserRepository extends JpaRepository<UserModel, UUID> {}
