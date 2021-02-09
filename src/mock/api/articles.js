// 引入mockjs
const Mock = require('mockjs');


const List = []
const count = 100
var Random = Mock.Random
const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

// Mock.mock('/article/list','post',(config) => {
//     console.log(config);
//
// });



for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        author: '@cname(2, 3)',
        title: '@ctitle(10, 20)',
        desc: '@ctitle(20, 40)',
        content: baseContent,
        type: '@integer(1, 3)',
        tag: '@ctitle(2, 3),@ctitle(2, 3),@ctitle(2, 3),@ctitle(2, 3)',
        time: Random.date(),
        status: '@integer(1, 2)',
        browse: '@integer(300, 5000)',
        image_uri,
    }))
}

module.exports = {
    Mock,
    list: {
        url: '/article/list',
        response: config => {
            const { page = 1, limit = 10 } =  JSON.parse(config.body);
            const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))
            //console.log(JSON.parse(config.body));
            return  {
                code: 200,
                data: pageList
            }
        }
    },
    detail: {
        url: '/article/detail',
        response: {
            code: 200,
            data: List[0]
        }
    }
};

