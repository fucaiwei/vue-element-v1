<template>
  <div class="site-edit">
    <div class="eidt-main">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="tc">
          <img :src="form.logo" class="avatar">
        </div>
        <div class="c-999">
          <p>vue-element-v1项目是个人学习Vuejs看了相关资料一个月多后完成的，有待完善。大都用原始的element-ui组件、页面单一、 没有过多复杂的配置项和过多的封装【相信新手看过其他成型的成品会有感受】</p>
          <p class="mt20">如果数据出错可退出再登录，重置数据</p><br >
          src目录结构<br ><br >
          <p>
            src<br >
            ├── assets<br >
            │   ├── css<br >
            │   │   └── common.styl<br >
            │   ├── images<br >
            │   │   ├── 404.jpg<br >
            │   │   └── avatar.png<br >
            │   ├── js<br >
            │   └── logo.png<br >
            ├── common(共公封装)<br >
            │   ├── citys.js<br >
            │   └── mixins<br >
            │       ├── common.js<br >
            │       └── filter.js<br >
            ├── config(配置)<br >
            │   ├── index.js<br >
            │   └── website.js<br >
            ├── mock(模拟数据)<br >
            │   ├── api<br >
            │   │   ├── articles.js<br >
            │   │   ├── login.js<br >
            │   │   ├── menu.js<br >
            │   │   └── user.js<br >
            │   ├── request.js<br >
            │   └── server.js<br >
            ├── router(路由)<br >
            │   ├── index.js<br >
            │   └── rules.js<br >
            ├── store(Vuex相关)<br >
            │   └── index.js<br >
            ├── views(模板文件)<br >
            │    ├── articles<br >
            │    │   ├── add.vue<br >
            │    │   ├── edit.vue<br >
            │    │   └── index.vue<br >
            │    ├── index<br >
            │    │   ├── echartsTpl.vue<br >
            │    │   └── index.vue<br >
            │    ├── layout<br >
            │    │   ├── asideHome.vue<br >
            │    │   ├── breadcrumb.vue<br >
            │    │   └── menuHome.vue<br >
            │    ├── login<br >
            │    │   └── index.vue<br >
            │    ├── site<br >
            │    │   ├── edit.vue<br >
            │    │   ├── index.vue<br >
            │    │   └── info.vue<br >
            │    ├── user<br >
            │    │   ├── add.vue<br >
            │    │   ├── edit.vue<br >
            │    │   └── index.vue<br >
            │    ├── error.vue<br >
            │    └── home.vue<br >
            ├── main.js<br >
            └── App.vue<br ><br ><br >
            交流群号:553870271
          </p>
          <p class="mt20">Github: <a class="c-green" href="https://github.com/fucaiwei/vue-element-v1">https://github.com/fucaiwei/vue-element-v1</a></p>
          <p>Gitee: <a class="c-green" href="https://gitee.com/fucaiwei/vue-element-v1">https://gitee.com/fucaiwei/vue-element-v1</a></p>
        </div>
      </el-form>
    </div>

  </div>
</template>
<script>
    import { quillEditor } from "vue-quill-editor"; //调用编辑器 参考vue-quill-editor
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    export default {
        name: 'site',
        data(){
            return {
                form: {},
            }
        },

        methods: {
            onSubmit() {
                setTimeout(() => {
                    this.$router.push({ name: 'site-edit'})
                },1000);

            }
        },
        mounted(){
            this.form = this.$conf.site

            console.log(this.form.logo)
        }
    }
</script>
<style lang="stylus" scoped>
  .site-edit{
    padding 20px;
    >>>.ql-editor{
      display inline-block
      width 100%;
      min-height 300px;
    }
    >>>.ql-snow{
      .ql-picker{
        height auto!important
      }
    }

    .avatar {
      width: 100px;
      height: 100px;
      margin auto
      display: block;
    }
  }

</style>
