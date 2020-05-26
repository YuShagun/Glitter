DROP DATABASE IF EXISTS `TwitterDB`;
CREATE DATABASE TwitterDB;
USE TwitterDB;

CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
);

CREATE TABLE `post` (
  `POST_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `DESCRIPTION` varchar(280) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `PHOTO_LINK` varchar(400) DEFAULT NULL,
  `LIKES` mediumtext,
  `HASH_TAGS` mediumtext,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID_idx` (`USER_ID`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
);

CREATE TABLE `tags` (
  `TAG_ID` int NOT NULL,
  `TAG_NAME` varchar(20) NOT NULL,
  PRIMARY KEY (`TAG_ID`)
);

INSERT INTO `user`(USER_ID,NAME)
VALUES
(1,'First'), (2,'Second'), (3,'User_1'), (4,'Task'), (5,'Fifth'),
(6,'Sixth'), (7,'Fifth'), (8,'I can'), (9,'Count up'), (10,'To ten');

INSERT INTO `post`(POST_ID,USER_ID,DESCRIPTION,CREATED_AT,PHOTO_LINK,LIKES,HASH_TAGS)
VALUES
(1, 3, 'Микрочип, производимый на некотором заводе, имеет форму плоского квадрата со стороной a микрометров.', '2020-01-19 13:24:00', '', '4;3;8;1','1;2;3;4;5'),
(2, 3, 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа.hello', '2020-01-19 13:27:00', '', '3;6;2', '1;2;4;5'),
(3, 4, 'Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.',
'2020-01-19 13:30:00', '', '4;3;5', '1;3'),
(4, 2, 'Однако используемый технологический процесс позволяет создавать только прямые дорожки hello','2020-01-19 13:35:00',
'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','','1'),
(5, 1, 'причем невозможно проложить одну дорожку под или над другой.', '2020-01-19 13:36:00', 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
'4;3;8;9', ''),       
(6, 2, 'Поэтому Вам необходимо определить, в какую сторону выводить каждый из контактов, чтобы полученные дорожки не пересекались, а суммарная их длина была минимальной.',
'2020-01-19 13:38:00','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','1;2;3;8',''),
(7, 3, 'В первой строке находится натуральное число a — длина стороны микрочипа в микрометрах (1 ≤ a ≤ 30). Во второй строке находится число n контактов на нижней стороне чипа.',
'2020-03-01 13:40:00','','',''),
(8, 4, 'hello! В последующих n строках следуют пары целых чисел в диапазоне от 1 до a − 1 — соответственно абсциссы и ординаты контактов во введённой системе координат.',
'2020-03-01 13:43:00','','3;4;6;8;9','1;5'),
(9, 4, 'Выведите в первой строке число минимальную суммарную длину необходимых дорожек.',
'2020-03-01 11:05:00','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','1;3;5;7;8',''),
(10, 1, 'В последующий строках поясните, в какую сторону выводить дорожку для каждого из контактов:',
'2020-03-02 11:07:00','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','1;2;3;9','1;3;5'),
(11, 1, 'в (i + 1)-й строке выведите одно из слов UP (англ. «вверх»), DOWN (англ. «вниз»), LEFT (англ. «налево»), RIGHT (англ. «направо») — направление выведения дорожки i-го контакта.',
'2020-05-26T11:10:00','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','',''),
(12, 1,'Вам, конечно же, известно, что в сложных карточных играх (таких, например, как преферанс) вероятность выигрыша зависит не только от умений и навыков игрока, но и от выпавшего расклада карт.',
'2020-05-26T19:49:00','','','2;5'),
(13, 6,'Карточная игра, в которой участвует n игроков, состоит из нескольких туров, в каждом туре карты сдаются по-новому.',
'2020-05-26T19:51:00','','',''),
(14, 6,'Сила руки i-го игрока (1 ≤ i ≤ n) в отдельном туре равна значению непрерывной случайной величины, равномерно распределённой на интервале [ai, bi].',
'2020-05-26T19:55:00','','',''),
(15, 1, 'Тур выигрывает игрок, у которого сила руки, определённая описанным случайным образом, будет наибольшей.',
'2020-05-26T20:00:08','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','','4'),
(16, 2, 'Если наибольшая сила окажется у нескольких игроков, в туре фиксируется ничья. Определите вероятность победы в туре для каждого игрока.',
'2020-05-26T20:01:08','https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg','',''),
(17, 6,'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала для силы руки каждого игрока.',
'2020-05-26T20:07:00','','','');

INSERT INTO `tags`(TAG_ID,TAG_NAME)
VALUES
(1, 'default tag'),(2, 'tag_2'),(3, 'third_tag'),(4, 'test'),(5, 'tp');