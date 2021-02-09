import {common} from '../common/mixins/common'

const site = {
    logo : 'https://s1.cssscz.com/cf/23/52/6f/cf23526f451784ff137f161b8fe18d5asize_400x400_size.png',
    name : 'vue-element-v1',
    keywords : 'ES6 、vue 、vuex 、vue-router 、vue-cli 、axios 、stylus 、element-ui 、mockjs',
    description : '项目是个人学习Vuejs看了相关资料一个月多后完成的，有待完善。大都用原始的element-ui组件、页面单一、 没有过多复杂的配置项和过多的封装',
    content : '项目是个人学习Vuejs看了相关资料一个月多后完成的，有待完善。大都用原始的element-ui组件、页面单一、 没有过多复杂的配置项和过多的封装【相信新手看过其他成型的成品会有感受】 https://github.com/fucaiwei/vue-element-v1',
};

const siteStorage = common.getStorage('siteStorage') || common.setStorage('siteStorage',site)

export default siteStorage
