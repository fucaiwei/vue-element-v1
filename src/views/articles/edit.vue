<template>
  <div class="articles-edit">
    <div class="eidt-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="form.tag" placeholder="用英文逗号隔开关键词"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
            <img v-if="form.image_uri" :src="form.image_uri" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="选择分类">
          <el-select v-model="form.cid" placeholder="请选择分类">
          <el-option label="HTML" value="1"></el-option>
          <el-option label="Python" value="2"></el-option>
          <el-option label="PHP" value="3"></el-option>
          <el-option label="Node" value="4"></el-option>
          <el-option label="VUE" value="5"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <template>
            <quill-editor
                    class="quill-editor-main"
                    v-model="form.content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
          </template>
        </el-form-item>
        <el-form-item label="浏览量">
          <span>{{form.browse}}</span>
        </el-form-item>
        <el-form-item label="发布时间">
          <span>{{form.time}}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即提交</el-button>
          <el-button>取消</el-button>
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
        name: 'artEdit',
        data(){
            return {
                form: {},
                editorOption: {
                    placeholder: "请在这里输入",
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onSubmit() {
                this.$message({message: '操作成功！', type: 'success'});
                setTimeout(() => {
                    this.$router.push({ name: 'articles'})
                },1000);

            },
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件

            // 转码
            escapeStringHTML(str) {
                str = str.replace(/&lt;/g,'<');
                str = str.replace(/&gt;/g,'>');
                return str;
            },
            handleAvatarSuccess(res, file) {
                this.form.image_uri = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

        },
        mounted(){
            this.form = this.$route.params
            console.log(this.form);

        }
    }
</script>
<style lang="stylus" scoped>
  .articles-edit{
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

    >>>.avatar-uploader{
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .el-upload:hover {
        border-color: #409EFF;
      }
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }

</style>
