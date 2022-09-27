package com.br.ecommerce.dtos;

import com.br.ecommerce.entities.Harmony;

import java.io.Serializable;

public class HarmonyDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String nameplate;
    private String image;

    public HarmonyDto() {
    }

    public HarmonyDto(Integer id, String nameplate, String image) {
        this.id = id;
        this.nameplate = nameplate;
        this.image = image;
    }

    public HarmonyDto(Harmony harmony) {
        this.id = harmony.getId();
        this.nameplate = harmony.getNameplate();
        this.image = harmony.getImage();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameplate() {
        return nameplate;
    }

    public void setNameplate(String nameplate) {
        this.nameplate = nameplate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}