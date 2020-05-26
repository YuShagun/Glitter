package bsu.fpmi.glitter.servlets;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        long start = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        long end = System.currentTimeMillis();

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String path = request.getRequestURL().toString();
        String method = request.getMethod();

        System.out.println(String.format("%s '%s' - done (%d ms)", method, path, end-start));
    }

    @Override
    public void destroy() {
    }
}
