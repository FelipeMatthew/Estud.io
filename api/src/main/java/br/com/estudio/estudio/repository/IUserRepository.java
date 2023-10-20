package br.com.estudio.estudio.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.estudio.estudio.model.UserModel;

@Repository
public interface IUserRepository extends JpaRepository<UserModel, UUID> {}
