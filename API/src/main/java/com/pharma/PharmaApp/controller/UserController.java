package com.pharma.PharmaApp.controller;

import com.pharma.PharmaApp.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pharma.PharmaApp.dto.user.LoginDTO;
import com.pharma.PharmaApp.dto.user.LoginReturnDTO;
import com.pharma.PharmaApp.dto.user.RegisterDTO;
import com.pharma.PharmaApp.dto.user.ResponseDTO;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.exceptions.TokenFailureException;
import com.pharma.PharmaApp.service.UserService;

/**
 * 
 * Controller for User instances, includes POST (Register, Login, QueryView) endpoints
 * 
 * @author Matthew Luka
 *
 */
@RequestMapping("user")
@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	/**
	 * 
	 * Registers a user
	 * 
	 * @param regDTO Data transfer object that carries user parameters
	 * @return A registered user
	 * @throws CustomException Throws any exceptions caused by nested functions
	 */
	@PostMapping("/register")
    public ResponseDTO register(@RequestBody RegisterDTO regDTO) throws CustomException {
        return userService.register(regDTO);
    }
	
	/**
	 * 
	 * Logs a user in
	 * 
	 * @param loginDTO Data transfer object that contains email and password
	 * @return A logged in user with authentication token
	 * @throws CustomException Throws any exceptions caused by nested functions
	 * @throws TokenFailureException Throws any exceptions where the password or user is incorrect
	 */
    @PostMapping("/login")
    public LoginReturnDTO login(@RequestBody LoginDTO loginDTO) throws CustomException, TokenFailureException {
        return userService.login(loginDTO);
    }

    /**
     * 
     * Views a user with a query
     * 
     * @param loginDTO Data transfer object holding intermediate user query data
     * @return A user display
     */
    @PostMapping("/view")
    public ResponseEntity<User> queryUserByEmail(@RequestBody LoginDTO loginDTO) {
        User user = userService.queryUserByEmail(loginDTO);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
