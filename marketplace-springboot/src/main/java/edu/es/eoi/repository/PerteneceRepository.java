package edu.es.eoi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.es.eoi.entity.Pertenece;

@Repository
public interface PerteneceRepository extends JpaRepository<Pertenece, Integer> {

}
