package com.br.ecommerce.repositories;


import com.br.ecommerce.entities.Harmony;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HarmonyRepository extends JpaRepository<Harmony, Integer> {
}
