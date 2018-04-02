package sea;

import javax.servlet.Filter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig {
	@Bean
	  public Filter jwtHeaderFilter() {
	    return new jwtHeaderFilter();
	  }
}
