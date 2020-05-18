package bsu.fpmi.glitter;

import java.text.ParseException;
import java.util.*;

public class Main {
    public static void main(String[] args) throws ParseException {
        //TweetContainer container = TweetContainer.testContainer();

        TweetFilterConfig filter = new TweetFilterConfig();
        //filter.setCreatedAt(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse("2020-01-20T11:05:00.000-0300"));
        //filter.setHashTags(Arrays.asList("tag_3", "tag_5"));
        List<Tweet> tweets = TweetContainer.localDatabase.getPage(null, null, filter);
        for (Tweet tweet : tweets) {
            System.out.println(tweet);
        }

        Tweet t = new Tweet("22", "", new Date(), "author", "", new ArrayList<>(), new ArrayList<>());

        System.out.println(TweetContainer.localDatabase.add(t));
        System.out.println(TweetContainer.localDatabase.get("22"));
        Tweet tmp = new Tweet(null, "description", null, null, null, new ArrayList<>(), new ArrayList<>(Arrays.asList("tag1", "tag2", "tagg")));
        System.out.println(TweetContainer.localDatabase.toggleLike("22", "user"));
        System.out.println(TweetContainer.localDatabase.get("22"));
        System.out.println(TweetContainer.localDatabase.toggleLike("22", "user"));
        System.out.println(TweetContainer.localDatabase.get("22"));

        //System.out.println(container.get("22"));
    }
}
