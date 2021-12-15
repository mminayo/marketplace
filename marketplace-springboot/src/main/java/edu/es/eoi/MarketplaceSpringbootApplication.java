package edu.es.eoi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("edu.es.eoi.")
@EnableJpaRepositories
@SpringBootApplication
public class MarketplaceSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketplaceSpringbootApplication.class, args);
	}

}
