package bsu.fpmi.glitter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Tweet {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> likes;
    private List<String> hashTags;

    public Tweet() {
        id = "";
        description = "";
        createdAt = new Date();
        author = "";
        photoLink = "";
        likes = new ArrayList<String>();
        hashTags = new ArrayList<String>();
    }

    public Tweet(String id, String description, Date date, String author, String photoLink, List<String> likes, List<String> hashTags) {
        this.id = id;
        this.description = description;
        this.createdAt = date;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = new ArrayList<String>(likes);
        this.hashTags = new ArrayList<String>(hashTags);
    }

    public String toString() {

        return "\"" + id + "\"\n\"" +
                description + "\"\n" +
                createdAt.toString() + "\n\"" +
                author + "\"\n" +
                photoLink + '\n' +
                likes.toString() + '\n' +
                hashTags.toString() + '\n';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return createdAt;
    }

    public void setDate(Date date) {
        this.createdAt = date;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public List<String> getLikes() {
        return likes;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public boolean validate() {
        return !(author.equals("") || id.equals(""));
    }

    public boolean merge(Tweet tweet) {
        boolean flag = false;

        if(tweet.getDescription() != null && !tweet.getDescription().equals("")) {
            flag = true;
            this.description = tweet.getDescription();
        }
        if(tweet.getPhotoLink() != null && !tweet.getPhotoLink().equals("")) {
            flag = true;
            this.photoLink = tweet.getPhotoLink();
        }
        if(tweet.getHashTags() != null && !tweet.getHashTags().isEmpty()) {
            flag = true;
            this.hashTags = tweet.getHashTags();
        }

        return flag;
    }

    public String toJSONString() {
        return "{\n\"id\": " + id + ";\n\"description\": " +
                description + ";\n\"createdAt\": " +
                createdAt.toString() + ";\n\"author\": " +
                author + ";\n\"photoLink\" " +
                photoLink + ";\n\"likes\": " +
                likes.toString() + ";\n\"hashTags\": " +
                hashTags.toString() + ";\n}";
    }
}