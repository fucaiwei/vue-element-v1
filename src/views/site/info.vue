<template>
  <div class="site-edit">
    <div class="eidt-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="LOGO">
          <img :src="form.logo" class="avatar">
        </el-form-item>

        <el-form-item label="网站名称">
          <div class="bb c-999">{{form.name}}</div>
        </el-form-item>
        <el-form-item label="关键词">
          <div class="bb c-999">{{form.keywords}}</div>
        </el-form-item>
        <el-form-item label="网站描述">
          <div class="bb c-999">{{form.description}}</div>
        </el-form-item>


        <el-form-item label="介绍内容">
          <template>
         <div class="bb c-999" v-html="form.content"></div>
          </template>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改</el-button>
         </el-form-item>
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
      display: block;
    }
  }

</style>
