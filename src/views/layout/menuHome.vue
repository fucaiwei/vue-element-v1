<template>
  <div class="home-menu">
    <div class="flex">

      <div class="cursor-box">
        <i class="cursor"
           v-bind:class="[isCollapse ? 'el-icon-s-unfold': 'el-icon-s-fold' ]"
           @click="handleNav">
        </i>
      </div>
    <div class="flex-item">
    </div>
      <el-menu
              :default-active="menuData.activeIndex"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#fff">
        <el-menu-item
                v-for="(vo,key) in menuData.list"
                :index="key|isToString"
                :key="key"
                >
          <a target="_blank">{{vo.name}}</a>
        </el-menu-item>

        <el-submenu index="100">
          <template #title>
            <el-avatar size="small"  shape="circle" :src="admin.avatar">
            </el-avatar>{{admin.nickname}}
          </template>
          <el-menu-item index="100" @click="delStorages">清除缓存</el-menu-item>
          <el-menu-item index="100" @click="adminInfo">资料信息</el-menu-item>
          <el-menu-item index="100" @click="logout">帐号退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

  </div>

</template>

<script>

import {mapState,mapMutations} from 'vuex'
import filter from '../../common/mixins/filter'
import {common} from '../../common/mixins/common'

export default {
  name: 'menuHome',
    data() {
        return {
            admin :{}
        };
    },
    computed:{
      ...mapState(['menuData','isCollapse','isReload'])
    },
    mixins:[filter],
    created(){
        let isReloads = performance.navigation.type === performance.navigation.TYPE_RELOAD?'true':'false';
        // console.log(isReloads,3,performance.navigation.type)
    },
    methods: {
        ...mapMutations(['handleCollapse','handleMenu']),
        handleSelect(key, keyPath) {

            if(key === "100") return false;
            this.handleMenu(key) // //切换顶部导航 同 this.$store.commit('handleMenu',{index:key})
            common.saveMenuStorage(this.menuData)
        },
        handleNav() {
            this.handleCollapse();//收缩侧边导航
        },
        adminInfo() {
            let  _this = this;
            this.$notify({
                title: '管理员信息',
                offset: 400,
                dangerouslyUseHTMLString: true,
                message: '<el-card class="box-card">\n' +
                    '<div>编号：'+this.admin.uid+'</div>\n' +
                    '<div>昵称：'+this.admin.nickname+'</div>\n' +
                    '<div>手机：'+this.admin.phone+'</div>\n' +
                    '<div>城市：'+this.admin.city+'</div>\n' +
                    '<div>角色：管理员</div>\n' +
                    '<div>绑定：'+this.admin.ip+'</div>\n' +
                    '</el-card>'
            });
        },
        delStorages() {
            common.clearStorage('siteStorage');//清除site StorageStorage
            this.$message({message: '清除缓存成功！', type: 'success'});
        },
        logout() {
            //this.delStorage('admin');//收缩侧边导航
            setTimeout(() => {
                this.$router.push({ name: 'login'})
                common.clearStorageAll();//清除site StorageStorage
            },1000);
        }
    },
    mounted () {
        let admin = common.getStorage('admin');
        if(!admin) return common.jumpLogin();
        this.admin = admin;
    }
}
</script>
<style lang="stylus" scoped>
  .cursor-box{
    color #999
    margin-left 15px;
    height 60px;
    line-height 60px
    .cursor{
      font-size 20px;
    }
  }
</style>
