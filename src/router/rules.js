
let routers = [
    {
        meta:{title:'后台登陆'},
        component:'login/index',
    },
    {
        path: '/',
        component:'home',
		redirect:{name:'index'},
        children: [
            {meta:{title:'网站首页'}, component:'index/index'},
            {meta:{title:'用户管理'}, component:'user/index'},
            {meta:{title:'新增用户'}, component:'user/add'},
            {meta:{title:'编辑用户'}, component:'user/edit'},
            {meta:{title:'内容管理'}, component:'articles/index'},
            {meta:{title:'发布文章'}, component:'articles/add'},
            {meta:{title:'编辑文章'}, component:'articles/edit'},
            {meta:{title:'网站配置'}, component:'site/index'},
            {meta:{title:'网站配置'}, component:'site/edit'},
            {meta:{title:'系统信息'}, component:'site/info'},
            {
                meta:{title:'错误页面'},
                path: '*',
                component:'error'
            }
        ]
    }


];

let getRouters = function () {
    //自动生成路由
    createRoute(routers)
    return routers;
}

function createRoute(arr) {
    for (let i = 0; i < arr.length; i++){
        if(!arr[i].component) return;

		let val = getValue(arr[i].component)
		arr[i].name = arr[i].name || val.replace(/\//g,'-')
		arr[i].path = arr[i].path || `/${val}`
        //自动生成路由
        let componentFun = import(`../views/${arr[i].component}.vue`)
        arr[i].component = ()=>componentFun
        if(arr[i].children && arr[i].children.length > 0){
            createRoute(arr[i].children)
        }
    }
}

function getValue(str) {
    let index = str.lastIndexOf('/')

	let val = str.substring(index + 1,str.length)
	if(val === 'index'){
		return str.substring(index,-1)
	}
	return str;
}

export default getRouters()
