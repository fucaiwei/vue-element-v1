<template>
  <div class="login-container">

    <el-form ref="loginForm"  class="login-form" autocomplete="on" label-position="left">
      <div class="title-container"><h3 class="title">登录</h3></div>

      <el-tooltip v-model="nameTip" content="帐号：admin/user/test" placement="right">
      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-mobile-phone"></i>
        </span>
        <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="请输入用户"
                name="username"
                type="text"
                tabindex="1"
                autocomplete="off"
        />
      </el-form-item>
      </el-tooltip>

      <el-tooltip v-model="pwdTip" content="密码：admin123" placement="right">
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-unlock"></i>
          </span>
          <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="请输入密码"
                  name="password"
                  tabindex="2"
                  autocomplete="off"
          />
          <span class="show-pwd" @click="showPwd">
            <i class="el-icon-view" :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"></i>
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
       登录
      </el-button>


    </el-form>

  </div>
</template>

<script>
    import { request }  from '../../mock/request'
    import { Mock,userInfo }  from '../../mock/api/login'//mock 模拟数据
    import {common} from '../../common/mixins/common'
    export default {
        name: 'login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: 'admin123'
                },
                passwordType: 'password',
                nameTip: false,
                pwdTip: false,
                loading: false,
            }
        },
        methods: {
            showPwd() {
                this.passwordType === 'password'? (this.passwordType = '') : (this.passwordType = 'password')
            },
            jump(){
                this.$router.push({ name: 'index'})
            },
            handleLogin() {
                var _this = this;
                const loading = this.$loading({
                    lock: true,
                    text: '登录中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });

                Mock.mock(userInfo.url,userInfo.response);
                request.post(userInfo.url,_this.loginForm)
                    .then(function (data) {
                        loading.close();
                        common.setStorage('admin',data.data);
                        _this.jump()
                    })
            }
        },
        mounted () {
            let admin = common.getStorage('admin');
            if(admin) return this.jump()

        }

    }
</script>


<style lang="stylus" scoped>

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: #333;
    overflow: hidden;
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .el-form-item {
      border: 1px solid #292929;
      box-shadow 2px 2px 5px 0 #444 color inset
      background: #000;
      border-radius: 5px;
      color: #454545;
      >>>.el-input__inner{
        background: #000;
        border none
      }
    }
    .login-form {
      position: relative;
      border solid 1px #333
      box-shadow 2px 2px 10px 0 #444
      border-radius 10px;
      width: 520px;
      max-width: 100%;
      padding: 0 35px 0;
      background: #222;
      margin: 300px auto 0 auto;
      overflow: hidden;

    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #666;
      vertical-align: middle;
      width: 40px;
      display: inline-block;
      i{
        font-size 18px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: #fff;
        margin: 20px auto 20px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 3px;
        font-size: 18px;
        right: 0;
        cursor: pointer;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: #889aa4;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }
</style>
