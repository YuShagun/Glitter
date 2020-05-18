package bsu.fpmi.glitter;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Stream;

public class TweetContainer {
    private HashMap<String, Date> keys;
    private TreeMap<Date, Tweet> sortedTweets;

    public static TweetContainer localDatabase;

    static {
        try {
            localDatabase = testContainer();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public TweetContainer() {
        keys = new HashMap<String, Date>();
        sortedTweets = new TreeMap<Date, Tweet>();
    }

    public TweetContainer(List<Tweet> list) {
        keys = new HashMap<String, Date>(list.size());
        sortedTweets = new TreeMap<Date, Tweet>();
        for (Tweet tweet : list){
            keys.put(tweet.getId(), tweet.getDate());
            sortedTweets.put(tweet.getDate(), tweet);
        }
    }

    public static TweetContainer testContainer() throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        Tweet[] arr = new Tweet[]{
                new Tweet("1",
                        "Микрочип, производимый на некотором заводе, имеет форму плоского квадрата со стороной a микрометров.",
                        dateFormat.parse("2020-01-19T13:24:00.000-0300"),
                        "User_1",
                        "",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Arrays.asList("tag_1", "tag_2", "tag_3", "tag_4", "tag_5")
                ),
                new Tweet("2",
                        "На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.",
                        dateFormat.parse("2020-01-19T13:27:00.000-0300"),
                        "User_1",
                        "",
                        Arrays.asList("User_1", "author", "User_3"),
                        Arrays.asList("tag_1", "tag_2", "tag_4", "tag_5")
                ),
                new Tweet("3",
                        "Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.",
                        dateFormat.parse("2020-01-19T13:30:00.000-0300"),
                        "User_1",
                        "",
                        Arrays.asList("Task", "User_1", "User_3"),
                        Arrays.asList("tag_1", "tag_3")
                ),
                new Tweet("4",
                        "Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,",
                        dateFormat.parse("2020-01-19T13:35:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.singletonList("tag_1")
                ),
                new Tweet("5",
                        "причем невозможно проложить одну дорожку под или над другой.",
                        dateFormat.parse("2020-01-19T13:36:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Collections.emptyList()
                ),
                new Tweet("6",
                        "Поэтому Вам необходимо определить, в какую сторону выводить каждый из контактов, чтобы полученные дорожки не пересекались, а суммарная их длина была минимальной.",
                        dateFormat.parse("2020-01-19T13:38:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Collections.emptyList()
                ),
                new Tweet("7",
                        "В первой строке находится натуральное число a — длина стороны микрочипа в микрометрах (1 ≤ a ≤ 30). Во второй строке находится число n контактов на нижней стороне чипа (1 ≤ n ≤ 38).",
                        dateFormat.parse("2020-01-19T13:40:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("8",
                        "В последующих n строках следуют пары целых чисел в диапазоне от 1 до a − 1 — соответственно абсциссы и ординаты контактов во введённой системе координат.",
                        dateFormat.parse("2020-01-19T13:43:00.000-0300"),
                        "User_1",
                        "",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Arrays.asList("tag_1", "tag_5")
                ),
                new Tweet("9",
                        "Выведите в первой строке число минимальную суммарную длину необходимых дорожек.",
                        dateFormat.parse("2020-01-20T11:05:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Collections.emptyList()
                ),
                new Tweet("10",
                        "В последующий строках поясните, в какую сторону выводить дорожку для каждого из контактов:",
                        dateFormat.parse("2020-01-20T11:07:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Arrays.asList("Task", "User_1", "author", "User_3"),
                        Arrays.asList("tag_3", "tag_4", "tag_5")
                ),
                new Tweet("11",
                        "в (i + 1)-й строке выведите одно из слов UP (англ. «вверх»), DOWN (англ. «вниз»), LEFT (англ. «налево»), RIGHT (англ. «направо») — направление выведения дорожки i-го контакта.",
                        dateFormat.parse("2020-01-20T11:10:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("12",
                        "Вам, конечно же, известно, что в сложных карточных играх (таких, например, как преферанс) вероятность выигрыша зависит не только от умений и навыков игрока, но и от выпавшего расклада карт.",
                        dateFormat.parse("2020-01-23T19:49:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Arrays.asList("tag_2", "tag_5")
                ),
                new Tweet("13",
                        "Карточная игра, в которой участвует n игроков, состоит из нескольких туров, в каждом туре карты сдаются по-новому.",
                        dateFormat.parse("2020-01-23T19:51:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("14",
                        "Сила руки i-го игрока (1 ≤ i ≤ n) в отдельном туре равна значению непрерывной случайной величины, равномерно распределённой на интервале [ai, bi].",
                        dateFormat.parse("2020-01-23T19:55:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("15",
                        "Тур выигрывает игрок, у которого сила руки, определённая описанным случайным образом, будет наибольшей.",
                        dateFormat.parse("2020-01-23T20:00:08.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.singletonList("tag_4")
                ),
                new Tweet("16",
                        "Если наибольшая сила окажется у нескольких игроков, в туре фиксируется ничья. Определите вероятность победы в туре для каждого игрока.",
                        dateFormat.parse("2020-01-23T20:01:08.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("17",
                        "Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала для силы руки каждого игрока.",
                        dateFormat.parse("2020-01-23T20:07:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("18",
                        "Выведите n строк, i-я из которых содержит одно действительное число — вероятность победы в туре i-го игрока. Абсолютная погрешность не должна превосходить 10−9.",
                        dateFormat.parse("2020-01-23T20:10:27.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.emptyList()
                ),
                new Tweet("19",
                        "Sample text",
                        dateFormat.parse("2020-03-23T20:09:00.000-0300"),
                        "User_1",
                        "",
                        Collections.emptyList(),
                        Arrays.asList("tag_1", "tag_2", "tag_3", "tag_4", "tag_5")
                ),
                new Tweet("20",
                        "",
                        dateFormat.parse("2020-03-23T21:10:59.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList(),
                        Collections.emptyList()
                )
        };
        return new TweetContainer(Arrays.asList(arr));
    }

    public Tweet get(String id) {
        Date key = keys.get(id);
        if(key == null)
            return null;

        return sortedTweets.get(key);
    }

    public List<Tweet> getPage(Integer skip, Integer top, TweetFilterConfig filter) {
        List<Tweet> res = new ArrayList<>(sortedTweets.values());

        if(skip == null)
            skip = 0;
        if(top == null)
            top = 10;
        if(skip >= res.size())
            return new ArrayList<>();

        if(filter == null || filter.isEmpty()) {
            Collections.reverse(res);
            res = res.subList(skip, Integer.min(skip + top, res.size()));
            return res;
        }

        Stream<Tweet> stream = res.stream();
        if(filter.getDate() != null){
            stream = stream.filter((Tweet t) -> t.getDate().getTime() <= filter.getDate().getTime());
        }
        if(filter.getAuthor() != null) {
            stream = stream.filter((Tweet t) -> t.getAuthor().compareTo(filter.getAuthor()) == 0);
        }
        if(filter.getHashTags() != null && filter.getHashTags().size() != 0) {
            stream = stream.filter((Tweet t) -> {
                for(String tag : filter.getHashTags()) if (!t.getHashTags().contains(tag))
                        return false;
                return true;
            });
        }

        res = new ArrayList<>(Arrays.asList(stream.toArray(Tweet[]::new)));
        Collections.reverse(res);
        if(skip >= res.size())
            return new ArrayList<>();

        res = res.subList(skip, Integer.min(skip + top, res.size()));
        return res;
    }

    public boolean add(Tweet tweet) {
        if(!tweet.validate() || keys.get(tweet.getId()) != null)
            return false;

        keys.put(tweet.getId(), tweet.getDate());
        sortedTweets.put(tweet.getDate(), tweet);
        return true;
    }

    public boolean edit(String id, Tweet tweet) {
        if(keys.get(id) == null)
            return false;

        Tweet old = this.get(id);
        if(!old.merge(tweet))
            return true;
        if(!old.validate())
            return false;

        sortedTweets.put(old.getDate(), old);
        return true;
    }

    public boolean remove(String id) {
        Date k = keys.remove(id);
        if(k != null) {
            sortedTweets.remove(k);
            return true;
        }

        return false;
    }

    public boolean toggleLike(String id, String user) {
        Tweet tweet = this.get(id);
        if(tweet == null)
            return false;
        if(tweet.getLikes().contains(user))
            tweet.getLikes().remove(user);
        else
            tweet.getLikes().add(user);

        return true;
    }

    public List<Tweet> getValues(){
        return new ArrayList<>(sortedTweets.values());
    }

    public String getNextId() {
        return Integer.toString(keys.size() + 1);
    }
}
