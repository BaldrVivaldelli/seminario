package com.dispositivos.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dispositivos.main.entities.Dispositivos;

public interface DispositivoRespository extends JpaRepository<Dispositivos, Long> {

}
