package com.pharma.PharmaApp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * 
 * Creates a new Swagger UI to enable limited endpoint testing without a designated front-end component
 * 
 * @author Matthew Luka
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	/**
	 * 
	 * Creates a new Swagger instance
	 * 
	 * @return A Docker carrying the Swagger instance
	 */
	@Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2)
        		.apiInfo(getApiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.pharma.PharmaApp"))
                .paths(PathSelectors.any())
                .build();
    }

	/**
	 * 
	 * Ties information to the homepage of the Swagger instance
	 * 
	 * @return Information to include in the information section of the Swagger UI
	 */
	private ApiInfo getApiInfo() {
        Contact contact = new Contact("Matthew Luka", "https://www.linkedin.com/in/matthewluka/", "matt@aisoft.dev");
        return new ApiInfoBuilder()
                .title("Pharmaceutical API")
                .description("Project for CS 411")
                .version("1.0.0")
                .license("Apache 2.0")
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0")
                .contact(contact)
                .build();
    }
}