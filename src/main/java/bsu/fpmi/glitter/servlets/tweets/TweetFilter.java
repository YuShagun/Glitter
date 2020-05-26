package bsu.fpmi.glitter.servlets.tweets;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TweetFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String path = request.getRequestURL().toString();
        String method = request.getMethod();

        if(method.equals("POST") || method.equals("PUT")) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        String[] reqParts = path.split("/tweets/");
        if(reqParts.length != 2) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        String redirectPath = reqParts[0] + "/tweets?id=" + reqParts[1];
        ((HttpServletRequest)servletRequest).getRequestDispatcher(redirectPath).forward(servletRequest, servletResponse);
    }



    @Override
    public void destroy() {
    }
}
