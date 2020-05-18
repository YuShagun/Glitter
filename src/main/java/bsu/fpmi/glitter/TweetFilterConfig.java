package bsu.fpmi.glitter;

import java.util.Date;
import java.util.List;

public class TweetFilterConfig {
    private String author;
    private Date date;
    private List<String> hashTags;

    public TweetFilterConfig(){
        author = null;
        date = null;
        hashTags = null;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("");

        sb.append("author: ");
        if (author == null)
            sb.append("null; ");
        else
            sb.append(author).append("; ");

        sb.append("date: ");
        if (date == null)
            sb.append("null; ");
        else
            sb.append(date).append("; ");

        sb.append("tags: ");
        if (hashTags == null)
            sb.append("null; ");
        else
            sb.append(hashTags);

        return sb.toString();
    }

    public String getAuthor() {
        return author;
    }

    public Date getDate() {
        return date;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setHashTags(List<String> hashTags) {
        if(hashTags.size() == 0)
            return;
        this.hashTags = hashTags;
    }

    public boolean isEmpty(){
        return author == null && date == null && hashTags == null;
    }
}
