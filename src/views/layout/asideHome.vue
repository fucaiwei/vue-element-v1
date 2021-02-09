<template>
  <div class="home-aside">
    <div class="logo-wrap">
      <h1 v-show="!isCollapse" class="animate__animated animate__fadeIn">{{$conf.site.name}}</h1>
      <h1 v-show="isCollapse" class="tc mt5 animate__animated animate__fadeIn">
        <el-avatar
              size="small"
              shape="circle"
              :src="$conf.site.logo">
      </el-avatar>
      </h1>
    </div>
    <el-menu
            :default-active="menuData.activeSubIndex"
            class="el-menu-vertical-aside"
            @select="handleSelect"
            :collapse="isCollapse">
      <el-menu-item
              v-for="(vo,key) in menuData.list[menuData.activeIndex].aside"
              :index="key|isToString"
              :key="key">
        <i :class="vo.icon"></i>
        <span slot="title">{{vo.name}}</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>

import router from '../../router'
import filter from '../../common/mixins/filter'
import {common} from '../../common/mixins/common'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'asideHome',
  components: {
      router
  },
  mixins:[filter],
  data() {
      return {};
  },

  computed:{...mapState(['menuData','isCollapse'])},
  methods: {
      ...mapMutations(['handleAside']),
      handleSelect(key, keyPath) {//侧边导航切换
          this.handleAside(key);
          let aside = this.menuData.list[this.menuData.activeIndex].aside;
          if(this.$route.path===aside[key].path) return false;
          router.push({path:aside[key].path})
          common.saveMenuStorage(this.menuData)
      },
  }
}
</script>
<style lang="stylus" scoped>
  .home-aside{
    position relative;
    overflow: hidden;
  }
  .logo-wrap{
    height 60px;
    line-height 60px;
    overflow hidden
    text-align center
    background-color: #545c64;
    color: #FFFFFF;
  }
  >>>.el-aside {
    position relative
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  >>>.el-menu-vertical-aside{
    height 100%;
  }
  >>>.el-menu-vertical-aside:not(.el-menu--collapse) {
    position relative
    width: 200px;
  }
</style>
