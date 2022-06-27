package com.pharma.PharmaApp.service;

import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharma.PharmaApp.dto.user.LoginDTO;
import com.pharma.PharmaApp.dto.user.LoginReturnDTO;
import com.pharma.PharmaApp.dto.user.RegisterDTO;
import com.pharma.PharmaApp.dto.user.ResponseDTO;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.exceptions.TokenFailureException;
import com.pharma.PharmaApp.models.Token;
import com.pharma.PharmaApp.models.User;
import com.pharma.PharmaApp.repository.UserRepository;

/**
 * 
 * Service for User model
 * 
 * @author Matthew Luka & Candice Fan
 *
 */
@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	TokenService tokenService;
	
	/**
	 * 
	 * Registers a user
	 * 
	 * @param regDTO Registration data transfer object
	 * @return Response object
	 * @throws CustomException If error is encountered
	 */
    public ResponseDTO register(RegisterDTO regDTO) throws CustomException {
        if (Objects.nonNull(userRepository.findByEmail(regDTO.getEmail()))) {
            return new ResponseDTO("202", "Cannot register: Duplicate user");
        }
        String safePass = regDTO.getPassword();
        try {
            safePass = hashPassword(regDTO.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        User user = new User(regDTO.getFirstName(), regDTO.getLastName(), regDTO.getEmail(), regDTO.getPhone(), regDTO.getZip(), safePass);
        
        try {
             userRepository.save(user);
             final Token token = new Token(user);
             tokenService.setToken(token);
             
            return new ResponseDTO("201", "Succesfully created user");
        } catch (Exception e) {
            throw new CustomException(e.getMessage());
        }
    }
    
    /**
     * 
     * Logs a user in
     * 
     * @param loginDTO Login data transfer object
     * @return Response object
     * @throws TokenFailureException If token error occurs
     * @throws CustomException If user does not exist or password is incorrect/hash fails
     */
    public LoginReturnDTO login(LoginDTO loginDTO) throws TokenFailureException, CustomException{
    
    	User user = userRepository.findByEmail(loginDTO.getEmail());
    	
    	if(Objects.isNull(user)) {
    		throw new CustomException("User does not exist");
    	}
    	
    	try {
    		if (!(user.getPassword().equals(hashPassword(loginDTO.getPassword())))) {
    			throw new CustomException("Password is incorrect");
    		}
    	} catch (NoSuchAlgorithmException e) {
    		throw new CustomException("Password hash failed");
    	}
    	
    	Token token = tokenService.getToken(user);
    	
    	try {
    		token.getToken();
    	} catch (Exception e) {
    		throw new TokenFailureException("Token does not exist");
    	}
    	
    	return new LoginReturnDTO(token.getToken(), "Success");
    	
    }
    
    /**
     * 
     * Hashes password using standard SHA-256 encryption
     * 
     * @param password Password string
     * @return Password Hash
     * @throws NoSuchAlgorithmException If algorithm is not recognized
     */
    private String hashPassword(String password) throws NoSuchAlgorithmException {
        return DigestUtils.sha256Hex(password);
    }


    /**
     * 
     * Retrieves a user by email
     * 
     * @param loginDTO Querying email object
     * @return User object
     */
    public User queryUserByEmail(LoginDTO loginDTO) {
        return userRepository.findByEmail(loginDTO.getEmail());
    }
	
}
