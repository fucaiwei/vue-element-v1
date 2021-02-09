<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" v-if="menuData.bran.length > 0">
    <el-breadcrumb-item v-for="vo in menuData.bran" :to="{ path: vo.path }">{{vo.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>

import router from '../../router'

import {mapState} from 'vuex'

export default {
  name: 'breadcrumbHome',
  components: {
      router
  },
  data() {
      return {};
  },
  created(){
      this.getRouterBran()
  },
  computed:{...mapState(['menuData'])},
  methods: {
      getRouterBran(){
          let bar = this.$route.matched.filter(v=>v.name)
          // console.info(this.$route.matched)
          let arr = [];
          bar.forEach((v,k)=>{
              if(v.name === 'index' || v.name ==='home') return;
              arr.push({
                  name:v.name,
                  path:v.path,
                  title:v.meta.title
              })
          })

          if(arr.length > 0){
              arr.unshift({name:'index',path:'/index',title:'首页'})
          }
          this.menuData.bran = arr;
          // console.log(this.menuData.bran)
      },
      isReloadNavigation(){
          performance.navigation.type === performance.navigation.TYPE_RELOAD
      },
  }
}
</script>
<style lang="stylus" scoped>
  .el-breadcrumb{
    border-bottom solid 1px #999;
    padding 20px 15px  15px  15px;
  }
</style>
