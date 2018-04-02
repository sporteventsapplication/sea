package sea;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.FilterRegistrationBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

public class jwtHeaderFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		final FilterRegistrationBean<jwtHeaderFilter> registrationBean = new FilterRegistrationBean();
	    registrationBean.setFilter(new jwtHeaderFilter());
	    registrationBean.addUrlPatterns("/sea/users/*");

	    //return registrationBean;

	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		final HttpServletRequest request = (HttpServletRequest) req;
	    final HttpServletResponse response = (HttpServletResponse) res;
	    final String authHeader = request.getHeader("authorization");
	    String loginURI = request.getContextPath() + "/sea/login";
	    
	    boolean loginRequest = request.getRequestURI().equals(loginURI);

	    if (loginRequest||"OPTIONS".equals(request.getMethod())) {
	        response.setStatus(HttpServletResponse.SC_OK);

	        chain.doFilter(req, res);
	    } else {

	        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
	            throw new ServletException("Missing or invalid Authorization header");
	        }

	        final String token = authHeader.substring(7);

	        try {
	            final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
	            request.setAttribute("claims", claims);
	        } catch (final SignatureException e) {
	            throw new ServletException("Invalid token");
	        }

	        chain.doFilter(req, res);
	    }

	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}

}
