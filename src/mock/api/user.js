// 引入mockjs
const Mock = require('mockjs');
const List = []
const count = 100
var Random = Mock.Random
const intro = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const avatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})
let { phone } = Mock.mock({
    'phone|1-10': ['@phone']
})

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        uid: '@increment',
        nickname: '@ctitle(2, 3)',
        intro: intro,
        type: '@integer(1, 3)',
        admin: '@integer(1, 2)',//Random.bool(2, 9, true),
        phone: '@phone',
        ip: '@ip',
        city: '@city',
        time: Random.date(),
        role: '@integer(1, 2)',
        status: '@integer(1, 2)',
        browse: '@integer(300, 5000)',
        avatar,
    }))
}


module.exports = {
    Mock,
    list: {
        url: '/user/list',
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
        url: '/user/detail',
        response: {
            code: 200,
            data: List[0]
        }
    }
};

