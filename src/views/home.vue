<template>
  <div class="home-admin">
    <el-container class="home-body">
      <asideHome></asideHome>
      <el-container class="home-container">
        <el-header>
          <menuHome></menuHome>
        </el-header>
        <el-main>
          <breadcrumbHome></breadcrumbHome>
          <router-view
                  id="routerView"
                  class="animate__animated animate__fadeIn"/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import asideHome from './layout/asideHome'
import menuHome from './layout/menuHome'
import breadcrumbHome from './layout/breadcrumb'

import { request }  from '../mock/request'
import { Mock,menu }  from '../mock/api/menu'//mock 模拟数据
import {common} from '../common/mixins/common'

import {mapMutations} from 'vuex'
export default {
    name: 'home',
    data(){
      return {
          loading:true
      }
    },
    watch:{
      '$route'(to){
          let menu = common.handleSetMenuIndex(to.path)
          this.getMenuData(menu);
      }
    },
    created(){
        var _this = this;
        let siteStorage = common.getStorage('menuStorage')  //common.setStorage('menuStorage',site)


        if(siteStorage){
             this.getMenuData(siteStorage);
            return false;
        }

        Mock.mock(menu.url,menu.response);

        request.post(menu.url)
            .then(function (data) {
                _this.getMenuData(data.data);
                common.setStorage('menuStorage',data.data);
            })
    },
    components: {
        breadcrumbHome,
        asideHome,
        menuHome
    },
    methods:{
        ...mapMutations(['getMenuData']),
        ckIsReload(){


        }
    },
    mounted(){
        this.$nextTick(function () {
            setTimeout(() => {
                this.loading=false
            },1000);
        })
    }
}
</script>
<style lang="stylus" scoped>
  .home-admin {
    height 100%;
    .home-body,
    .home-container{
      height 100%;
    }
    .el-header{
      padding-left 5px;
      background-color: #545c64;
    }
    .el-main{
      padding 0
    }
    body > .el-container {
      margin-bottom: 40px;
    }
  }
</style>
