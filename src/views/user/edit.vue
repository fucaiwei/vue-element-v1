<template>
  <div class="suer-edit">
    <div class="user-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="绑定IP">
          <el-input v-model="form.ip" placeholder="绑定IP"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
            <img v-if="form.avatar" :src="form.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="城市">
          <el-cascader
                  ref="city"
                  :value="form.city"
                  :options="form.citys"
                  :show-all-levels="false"
                  @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="介绍">
          <template>
            <quill-editor
                    class="quill-editor-main"
                    v-model="form.intro"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
          </template>
        </el-form-item>
        <el-form-item label="角色">
          <template>
            <el-radio v-model="form.admin" :label="1">会员</el-radio>
            <el-radio v-model="form.admin" :label="2">管理</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="时间">
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
    import citys  from '../../common/citys'//城市数据
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
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'color': [] }, { 'background': [] }],
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
                    this.$router.push({ name: 'user'})
                },1000);
            },
            handleChange(value) {
                let cityName = this.$refs.city.getCheckedNodes()[0].label
                this.$message({message: '选择了【' + cityName + '】', type: 'info'});
                console.log(value);
            },
            handleCity() {
                var options_temp = []
                citys.forEach(function (value,index) {
                    var children = []
                    if(value['c']){
                        // children
                        value['c'].forEach(function (val,key) {
                            children[key] = {
                                value:key,
                                label:val.n// children:val.n
                            }
                        })
                    }
                    options_temp[index] = {
                        value:index,
                        label:value.n,
                        children:children
                    }
                });
                this.form.citys = options_temp
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
                this.form.avatar = URL.createObjectURL(file.raw);
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
            console.log(this.form)
            this.handleCity()
        }
    }
</script>
<style lang="stylus" scoped>
  .suer-edit{
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
