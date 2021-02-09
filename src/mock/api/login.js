const Mock = require('mockjs');
Mock.setup( { timeout:  5000 } ) ;   //响应时间延迟 400 毫秒；

let userInfo = {}
var Random = Mock.Random

const intro = '我是一个管理员'
const avatar = 'https://s1.cssscz.com/cf/23/52/6f/cf23526f451784ff137f161b8fe18d5asize_400x400_size.png'

module.exports = {
    Mock,
    userInfo: {
        url: '/login',
        response: config => {
            let code = 200;
            const { username = false, password = false } =  JSON.parse(config.body);
            let nicknames = ['admin','user','test'].indexOf(username)

            if(!username || !password ){
                code = -1
            }
            if(nicknames < 0 || password !== 'admin123'){
                code = -1
            }

            userInfo = Mock.mock({
                uid: '@integer(1, 9999)',
                nickname: username,
                intro: intro,
                type: '@integer(1, 3)',
                admin: 1,
                phone: '@phone',
                ip: '@ip',
                city: '@city',
                time: Random.date(),
                role: '@integer(1, 2)',
                status: '@integer(1, 2)',
                avatar,
            })

            //console.log(JSON.parse(config.body));
            return  {
                code: code,
                data: userInfo
            }
        }
    }

};

