<template>
  <el-container class="tc">
    <div class="flex-item">
      <img  src="@/assets/images/404.jpg">
      <div style="height: 40px;line-height: 40px;">
        <p><el-link type="info" disabled>在地址栏中输入了错误的内容,该链接已过期</el-link></p>
        <p>  <el-button type="primary" plain>返回首页</el-button>   <el-button type="danger" plain>联系我们</el-button></p>
        <p class="c-999 f14">{{second}}秒后自动反回首页</p>
      </div>
    </div>
  </el-container>
</template>

<script>
    export default {
        name: 'error',
        data() {
            return {
                second:5
            };
        },
        methods:{
           jump(){
               this.$router.push({ name: 'index'})
           }
        },
        mounted(){
            var _this = this;
            this.$nextTick(function () {
               let timer = setInterval(function () {
                   _this.second--
                   if(_this.second === 1){

                       clearInterval(timer);
                       _this.jump()
                   }
               },1000);
            })
        }

    }
</script>

