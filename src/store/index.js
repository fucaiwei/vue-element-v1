import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      isCollapse: false,
      menuData:{
          activeIndex:'0',
          activeSubIndex:'0',
          bran:[],
          list:[{}]
      }
  },
  mutations: {
      handleCollapse(state) {
          state.isCollapse = !state.isCollapse
      },
      handleMenu(state,index) {//切换顶部导航
          state.menuData.activeSubIndex = state.menuData.activeIndex === index ? index.toString() : '0';
          state.menuData.activeIndex = index.toString()

      },
      handleAside(state,index) {//切换侧边导航
          state.menuData.activeSubIndex = index.toString()
      },
      getMenuData(state,obj) {//导航信息
          state.menuData = obj
      },
  },
  actions: {
  },
  getters: {

  }
})
