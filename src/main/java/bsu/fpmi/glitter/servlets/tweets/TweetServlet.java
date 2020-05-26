package bsu.fpmi.glitter.servlets.tweets;

import bsu.fpmi.glitter.Tweet;
import bsu.fpmi.glitter.TweetContainer;
import bsu.fpmi.glitter.TweetFilterConfig;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

public class TweetServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String id = req.getParameter("id");

        Tweet tweet = TweetContainer.localDatabase.get(id);
        String str;
        if(tweet == null)
            str = "{\n}\n";
        else
            str = tweet.toJSONString();

        resp.getOutputStream().write(str.getBytes(StandardCharsets.UTF_8));

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        if(req.getRequestURL().indexOf("/add") != -1)
            printStatus(resp, addPost(req, resp));
        else
            postPage(req, resp);
    }

    private boolean addPost(HttpServletRequest req, HttpServletResponse resp) {
        Tweet tweet = parseTweet(req, resp);
        if(tweet.getAuthor().equals(""))
            return false;

        tweet.setId(TweetContainer.localDatabase.getNextId());
        tweet.setDate(new Date());
        return TweetContainer.localDatabase.add(tweet);
    }

    private Tweet parseTweet(HttpServletRequest req, HttpServletResponse resp) {
        Tweet tweet = new Tweet();

        String str = req.getParameter("au");
        if(str != null)
            tweet.setAuthor(str);
        str = req.getParameter("d");
        if(str != null)
            tweet.setDescription(str);
        str = req.getParameter("pl");
        if(str != null)
            tweet.setPhotoLink(str);

        String[] arr = parseArray(req.getParameter("tags"));
        if(arr.length != 0)
            tweet.setHashTags(Arrays.asList(arr));

        return tweet;
    }

    private void postPage(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Integer skip, top;

        String skipStr = req.getParameter("skip");
        skip = parseInt(skipStr);
        String topStr = req.getParameter("top");
        top = parseInt(topStr);

        TweetFilterConfig filterConfig = new TweetFilterConfig();

        String dateStr = req.getParameter("date");
        if(dateStr != null) {
            try {
                filterConfig.setDate(parseDate(dateStr));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        String author = req.getParameter("author");
        if(author != null)
            filterConfig.setAuthor(author);

        String tagsStr = req.getParameter("tags");
        String[] tags = parseArray(tagsStr);
        if(tags.length != 0)
            filterConfig.setHashTags(Arrays.asList(tags));

        List<Tweet> tweets = new ArrayList<Tweet>(TweetContainer.localDatabase.getPage(skip, top, filterConfig));
        ServletOutputStream out = resp.getOutputStream();
        printTweets(out, tweets);
    }

    private Integer parseInt(String str) {
        if(str == null)
            return null;
        else
            return Integer.parseInt(str);
    }

    private Date parseDate(String str) throws ParseException {
        return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(str);
    }

    private String[] parseArray(String str) {
        if(str == null)
            str = "";

        Stream<String> stream = Arrays.stream(str.split(","));
        stream = stream.filter((string) -> !string.equals(""));

        return stream.toArray(String[]::new);
    }

    private void printTweets(ServletOutputStream out, List<Tweet> tweets) throws IOException {
        for(Tweet tweet : tweets) {
            out.write((tweet.toJSONString() + "\n").getBytes(StandardCharsets.UTF_8));
        }

        if(tweets.size() == 0)
            out.write("{\n}\n".getBytes(StandardCharsets.UTF_8));
    }

    private void printStatus(HttpServletResponse resp, boolean status) throws IOException {
        resp.getOutputStream().println("{\n\"success\" : " + status + ";\n}");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String id = req.getParameter("id");

        resp.getOutputStream().println("{\n\"success\": " + TweetContainer.localDatabase.remove(id) + ";\n}");
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        if(req.getRequestURL().indexOf("/like") != -1)
            printStatus(resp, toggleLike(req, resp));
        else
            printStatus(resp, editPost(req, resp));
    }

    private boolean toggleLike(HttpServletRequest req, HttpServletResponse resp) {
        String id = req.getParameter("id");
        String user = req.getParameter("user");
        if(id == null || user == null)
            return false;
        return TweetContainer.localDatabase.toggleLike(id, user);
    }

    private boolean editPost(HttpServletRequest req, HttpServletResponse resp) {
        String id = req.getParameter("id");
        if(id == null)
            return false;

        Tweet tweet = parseTweet(req, resp);
        return TweetContainer.localDatabase.edit(id, tweet);
    }
}
