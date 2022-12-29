package com.corsoangular.backend.outputModels;

public class LoginResponse {

    public LoginResponse(String status, UserStatusResponse user) {
        this.status = status;
        this.user = user;
    }

    private String status;
    private UserStatusResponse user;

    public UserStatusResponse getUser() {
        return user;
    }

    public void setUser(UserStatusResponse user) {
        this.user = user;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
