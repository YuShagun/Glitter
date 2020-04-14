"use strict";

(function () {
    let posts = [
        {
            id: '1',
            description: 'Микрочип, производимый на некотором заводе, имеет форму плоского квадрата со стороной a микрометров.',
            createdAt: new Date('2020-01-19T13:24:00'),
            author: 'User_1',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5'],
        },
        {
            id: '2',
            description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.',
            createdAt: new Date('2020-01-19T13:27:00'),
            author: 'User_1',
            likes: ['User_1', 'author', 'User_3'],
            hashTags: ['tag_1', 'tag_2', 'tag_4', 'tag_5'],
        },
        {
            id: '3',
            description: 'Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.',
            createdAt: new Date('2020-01-19T13:30:00'),
            author: 'User_1',
            likes: ['Task', 'User_1', 'User_3'],
            hashTags: ['tag_1', 'tag_3'],
        },
        {
            id: '4',
            description: 'Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,',
            createdAt: new Date('2020-01-19T13:35:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: ['tag_1'],
        },
        {
            id: '5',
            description: 'причем невозможно проложить одну дорожку под или над другой.',
            createdAt: new Date('2020-01-19T13:36:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: [],
        },
        {
            id: '6',
            description: 'Поэтому Вам необходимо определить, в какую сторону выводить каждый из контактов, чтобы полученные дорожки не пересекались, а суммарная их длина была минимальной.',
            createdAt: new Date('2020-01-19T13:38:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: [],
        },
        {
            id: '7',
            description: 'В первой строке находится натуральное число a — длина стороны микрочипа в микрометрах (1 ≤ a ≤ 30). Во второй строке находится число n контактов на нижней стороне чипа (1 ≤ n ≤ 38).',
            createdAt: new Date('2020-01-19T13:40:00'),
            author: 'User_1',
            likes: [],
            hashTags: [],
        },
        {
            id: '8',
            description: 'В последующих n строках следуют пары целых чисел в диапазоне от 1 до a − 1 — соответственно абсциссы и ординаты контактов во введённой системе координат.',
            createdAt: new Date('2020-01-19T13:43:00'),
            author: 'User_1',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: ['tag_1', 'tag_5'],
        },
        {
            id: '9',
            description: 'Выведите в первой строке число минимальную суммарную длину необходимых дорожек.',
            createdAt: new Date('2020-01-20T11:05:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: [],
        },
        {
            id: '10',
            description: 'В последующий строках поясните, в какую сторону выводить дорожку для каждого из контактов:',
            createdAt: new Date('2020-01-20T11:07:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: ['Task', 'User_1', 'author', 'User_3'],
            hashTags: ['tag_3', 'tag_4', 'tag_5'],
        },
        {
            id: '11',
            description: 'в (i + 1)-й строке выведите одно из слов UP (англ. «вверх»), DOWN (англ. «вниз»), LEFT (англ. «налево»), RIGHT (англ. «направо») — направление выведения дорожки i-го контакта.',
            createdAt: new Date('2020-01-20T11:10:00'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: [],
        },
        {
            id: '12',
            description: 'Вам, конечно же, известно, что в сложных карточных играх (таких, например, как преферанс) вероятность выигрыша зависит не только от умений и навыков игрока, но и от выпавшего расклада карт.',
            createdAt: new Date('2020-01-23T19:49:00'),
            author: 'User_1',
            likes: [],
            hashTags: ['tag_2', 'tag_5'],
        },
        {
            id: '13',
            description: 'Карточная игра, в которой участвует n игроков, состоит из нескольких туров, в каждом туре карты сдаются по-новому.',
            createdAt: new Date('2020-01-23T19:51:00'),
            author: 'User_1',
            likes: [],
            hashTags: [],
        },
        {
            id: '14',
            description: 'Сила руки i-го игрока (1 ≤ i ≤ n) в отдельном туре равна значению непрерывной случайной величины, равномерно распределённой на интервале [ai, bi].',
            createdAt: new Date('2020-01-23T19:55:00'),
            author: 'User_1',
            likes: [],
            hashTags: [],
        },
        {
            id: '15',
            description: 'Тур выигрывает игрок, у которого сила руки, определённая описанным случайным образом, будет наибольшей.',
            createdAt: new Date('2020-01-23T20:00:08'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: ['tag_4'],
        },
        {
            id: '16',
            description: 'Если наибольшая сила окажется у нескольких игроков, в туре фиксируется ничья. Определите вероятность победы в туре для каждого игрока.',
            createdAt: new Date('2020-01-23T20:01:08'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: [],
        },
        {
            id: '17',
            description: 'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала для силы руки каждого игрока.',
            createdAt: new Date('2020-01-23T20:07:00'),
            author: 'User_1',
            likes: [],
            hashTags: [],
        },
        {
            id: '18',
            description: 'Выведите n строк, i-я из которых содержит одно действительное число — вероятность победы в туре i-го игрока. Абсолютная погрешность не должна превосходить 10−9.',
            createdAt: new Date('2020-01-23T20:10:27'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: [],
        },
        {
            id: '19',
            description: 'Sample text',
            createdAt: new Date('2020-03-23T20:09:00'),
            author: 'User_1',
            likes: [],
            hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5'],
        },
        {
            id: '20',
            description: '',
            createdAt: new Date('2020-03-23T21:10:59'),
            author: 'Task',
            photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
            likes: [],
            hashTags: [],
        },
    ];

    function getPosts(skip = 0, top = 10, filterConfig) {
        if (typeof (skip) !== 'number') {
            console.log('Invalid argument: "skip" isn\'t number');
            return;
        }
        if (typeof top !== 'number') {
            console.log('Invalid argument: "top" isn\'t number');
            return;
        }
        if (!['object', 'undefined'].includes(typeof filterConfig)) {
            console.log('Invalid argument: "filterConfig" isn\'t object');
            return;
        }
        for (let key in filterConfig) if (!(key in posts[0]) && key !== 'createdAt') {
            console.log(`Invalid argument: "filterConfig" contains invalid property "${key}"`);
            return;
        }

        let res = posts.slice();
        if (typeof filterConfig !== 'undefined' && 'createdAt' in filterConfig)
            res = res.filter(item => (item.createdAt.getTime() <= filterConfig.createdAt.getTime() + 86400000) && item.createdAt >= filterConfig.createdAt);
        res = res.filter(item => {
            for (let key in filterConfig) if ((!['createdAt', 'hashTags', 'likes'].includes(key)) && filterConfig[key] !== item[key])
                return false;
            return true;
        });
        if (typeof filterConfig !== 'undefined' && 'hashTags' in filterConfig)
            res = res.filter(item => {
               for (let tag of filterConfig.hashTags) if (!item.hashTags.includes(tag))
                   return false;
               return true;
            });

        res.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        return res.slice(skip, skip + top);
    }

    function getPost(id) {
        if (typeof (id) !== 'string') {
            console.log('Invalid argument: "id" isn\'t string');
            return;
        }
        return posts.find(item => item.id === id);
    }

    function validatePost(post) {
        if (typeof post !== 'object') {
            console.log('Invalid argument: "post" isn\'t object');
            return false;
        }
        let test = {
            id: '',
            description: '',
            createdAt: new Date(),
            author: '',
            likes: [],
            hashTags: [],
        };
        for (let key in test) if (!(key in post) || typeof(test[key]) !== typeof(post[key])) {
            console.log(`Missing property '${key}'`);
            return false;
        }
        for (let key in post) if (!(key in test) && key !== 'photoLink') {
            console.log(`Invalid property '${key}'`);
            return false;
        }
        if (post.id === '') {
            return false;
        }
        if (post.description.length > 200)
            return false;
        for (let str of post.likes) if (typeof(str) !== 'string')
            return false;
        for (let str of post.hashTags) if (typeof(str) !== 'string')
            return false;
        return post.author !== '';
    }

    function addPost(post) {
        if (typeof post !== 'object') {
            return false;
        }
        if (!validatePost(post)) {
            console.log('Invalid post');
            return false;
        }
        if (typeof(getPost(post.id)) !== 'undefined') {
            return false;
        }
        posts.push(post);
        return true;
    }

    function editPost(id, post) {
        if (typeof post !== 'object') {
            console.log('Invalid argument: "post" isn\'t object');
            return false;
        }
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return false;
        }
        let source = getPost(id);
        if (typeof source === 'undefined') {
            console.log(`Wrong argument: post with id = '${id}' does not exist`);
            return false;
        }
        for (let key in post)
            if (!(key in source)) {
                console.log(`Invalid argument: "post" contains invalid property '${key}'`);
                return false;
            }
        let copy = {};
        Object.assign(copy, source);
        for (let key in post) {
            if (!['id', 'author', 'createdAt', 'likes', 'hashTags'].includes(key))
                copy[key] = post[key];
        }
        if ('likes' in post)
            copy['likes'] = post.likes.slice();
        if ('hashTags' in post)
            copy['hashTags'] = post.hashTags.slice();
        copy.id = 'falseId';
        if (validatePost(copy)) {
            copy.id = id;
            Object.assign(source, copy);
        }
        else return false;
        return true;
    }

    function removePost(id) {
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return;
        }
        let ind = -1;
        let source = posts.find((item, index) => {
            ind = index;
            return item.id === id;
        });
        if (typeof source === 'undefined') {
            console.log(`Wrong argument: post with id = '${id}' does not exist`);
            return false;
        }
        posts.splice(ind, 1);
        return true;
    }

    function testEverything() {
        testArray();
        testGettingMany();
        testGettingSingle();
        testValidation();
        testAdding();
        testEditing();
        testRemoving();
    }

    function testArray() {
        console.log('Check array\n\n');
        console.log(`Array length is ${posts.length}`);
        console.log(posts);
    }

    function testGettingMany() {
        console.log('\nTest getPosts()\n\n');
        console.log(`getPosts(0, 10)`);
        console.log(getPosts(0, 10));
        console.log('getPosts(\'0\', 10);');
        console.log(getPosts('0', 10));
        console.log('getPosts(0, \'10\');');
        console.log(getPosts(0, '10'));
        console.log('getPosts(0, 8, {author: \'User_1\'})');
        console.log(getPosts(0, 8, {author: 'User_1'}));
        console.log('getPosts(0, 15, {author: \'Task\'})');
        console.log(getPosts(0, 15, {author: 'Task'}));
        console.log('getPosts(0, 15, {author: \'Task\', wrongProperty: \'value\'})');
        console.log(getPosts(0, 15, {author: 'Task', wrongProperty: 'value'}));
        console.log('getPosts(0, 15, "Task")');
        console.log(getPosts(0, 15, "Task"));
        console.log('getPosts(0, 10, {createdAt: new Date(2020, 0, 19)})');
        console.log(getPosts(0, 10, {createdAt: new Date(2020, 0, 19)}));
        console.log('getPosts(0, 10, {author: \'User_1\', createdAt: new Date(2020, 0, 19)})');
        console.log(getPosts(0, 10, {author: 'User_1', createdAt: new Date(2020, 0, 19)}));
        console.log(`getPosts(20, 10)`);
        console.log(getPosts(20, 10));
        console.log(`getPosts(5, 10)`);
        console.log(getPosts(5, 10));
        console.log('getPosts(0, 15, {hashTags: [\'tag_1\']})');
        console.log(getPosts(0, 15, {hashTags: ['tag_1']}));
        console.log('getPosts(0, 15, {hashTags: [\'tag_1\', \'tag_3\']})');
        console.log(getPosts(0, 15, {hashTags: ['tag_1', 'tag_3']}));
    }

    function testGettingSingle() {
        console.log('\nTest getPost()\n\n');
        console.log('getPost(\'5\')');
        console.log(getPost('5'));
        console.log('getPost(\'5\')');
        console.log(getPost(5));
        console.log('getPost(\'30\')');
        console.log(getPost('30'));
    }

    function testValidation() {
        console.log('\nTest validatePost()\n\n');
        console.log(`getPost('3')`);
        console.log(getPost('3'));
        console.log('validatePost(getPost(\'3\'))');
        console.log(validatePost(getPost('3')));
        console.log('validatePost()');
        console.log(validatePost());
        console.log('validatePost(3)');
        console.log(validatePost(3));
        console.log(`validatePost({id: '',
        description: '',
        createdAt: new Date(),
        author: '',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(validatePost({
                id: '',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));
        console.log(`validatePost({id: '',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(validatePost({
                id: '',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; empty id');
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: '',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; empty author');
        console.log(`validatePost({id: '25',
        description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.205 символов',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(validatePost({
                id: '25',
                description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.205 символов',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; description is too long');
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        wrongProperty: 'value'})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                wrongProperty: 'value'
            }
        ) + '; wrong structure');
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
            }
        ) + '; wrong structure');
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: ['a', 21],})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: ['a', 21],
            }
        ));
        console.log(`validatePost({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: ['a', 21],})`);
        console.log(validatePost({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: ['a', 21],
            }
        ));
    }

    function testAdding() {
        console.log('\nTest addPost()\n\n');
        console.log(`addPost({id: '25',
        description: '',
        createdAt: new Date('2020-04-23T21:19:07'),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(addPost({
                id: '25',
                description: '',
                createdAt: new Date('2020-04-23T21:19:07'),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));
        console.log(`addPost({id: '2',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(addPost({
                id: '2',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));
        console.log(`addPost('post')`);
        console.log(addPost('post'));
        console.log(`addPost({id: '30',
        description: '',
        createdAt: new Date('2020-04-23T21:19:07'),
        author: 'author',
        photoLink: '',})`);
        console.log(addPost({
                id: '30',
                description: '',
                createdAt: new Date('2020-04-23T21:19:07'),
                author: 'author',
                photoLink: '',
            }
        ));
    }

    function testEditing() {
        console.log('\nTest editPost()\n\n');
        console.log('getPost(\'25\').description');
        console.log(getPost('25').description);
        console.log(`editPost('25', {description: new Date().toString(),})`);
        console.log(editPost('25', {
                description: new Date().toString(),
            }
        ));
        console.log('getPost(\'25\').description');
        console.log(getPost('25').description);
        console.log('getPost(\'30\')');
        console.log(getPost('30'));
        console.log(`editPost('30', {description: 'New description',})`);
        console.log(editPost('30', {
                description: 'New description',
            }
        ));
        console.log(`editPost('', {description: 'New description',})`);
        console.log(editPost('', {
                description: 'New description',
            }
        ));
        console.log(`editPost('25', 'post')`);
        console.log(editPost('25', 'post'));
        console.log(`editPost('25', {description: 'New description',
        falseProperty: 'property'})`);
        console.log(editPost('25', {
                description: 'New description',
                falseProperty: 'property'
            }
        ));
        console.log('getPost(\'25\').description');
        console.log(getPost('25').description);
        console.log(`editPost('25', {description: 'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из
         последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала 
         для силы руки каждого игрока.(Over than 200 symbols)',})
        //Description is too big`);
        console.log(editPost('25', {
                description: 'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала для силы руки каждого игрока.(Over than 200 symbols)',
            }
        ));
        console.log('getPost(\'25\').description');
        console.log(getPost('25').description);
        console.log(`getPost('1').likes`);
        console.log(getPost('1').likes);
        console.log(`editPost('25', {likes: ['Task', 'User_1', 'author', 'User_3', 'User_5'],})`);
        console.log(editPost('1', {
                likes: ['Task', 'User_1', 'author', 'User_3', 'User_5'],
            }
        ));
        console.log(`getPost('1').likes`);
        console.log(getPost('1').likes);
        console.log(`getPost('1').hashTags`);
        console.log(getPost('1').hashTags);
        console.log(`editPost('25', {hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5', 'new_tag'],})`);
        console.log(editPost('1', {
                hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5', 'new_tag'],
            }
        ));
        console.log(`getPost('1').hashTags`);
        console.log(getPost('1').hashTags);
    }

    function testRemoving() {
        console.log('\nTest removePost()\n\n');
        console.log(`removePost('');`);
        console.log(removePost(''));
        console.log(`getPost('30');`);
        console.log(getPost('30'));
        console.log(`removePost('30');`);
        console.log(removePost('30'));
        console.log(`getPost('25');`);
        console.log(getPost('25'));
        console.log(`removePost('25');`);
        console.log(removePost('25'));
        console.log(`getPost('25');`);
        console.log(getPost('25'));
    }

    testEverything();
}());