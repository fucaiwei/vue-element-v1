const Mock = require('mockjs');

let menu = {
    activeIndex:'0',
        activeSubIndex:'0',
        bran:[],
        list:[
        {
            name:'基础',
            icon:'el-icon-s-platform',
            aside:[

                {name:'网站首页',icon:'el-icon-s-home',path:'/index'},
                {name:'发布文章',icon:'el-icon-s-promotion',path:'/articles/add'},
                {name:'内容管理',icon:'el-icon-s-order',path:'/articles'},
                {name:'用户管理',icon:'el-icon-s-custom',path:'/user'},
            ]
        },
        {
            name:'设置',
            icon:'el-icon-s-tools',
            aside:[
                {name:'网站设置',icon:'el-icon-s-tools',path:'/site'},
                {name:'系统信息',icon:'el-icon-notebook-2',path:'/site/info'}
            ]
        }
    ]
}

module.exports = {
    Mock,
    menu: {
        url: '/menu',
        response: config => {
            return  {
                code: 200,
                data: menu
            }
        }
    }
};



