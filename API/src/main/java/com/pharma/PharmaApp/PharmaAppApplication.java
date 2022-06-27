package com.pharma.PharmaApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * 
 * Driver class for the Spring Boot application
 * @author Matthew Luka
 *
 */
@SpringBootApplication
public class PharmaAppApplication {

	/**
	 * 
	 * Main function called
	 * 
	 * @param args - Default Java main() function arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(PharmaAppApplication.class, args);
	}

}
