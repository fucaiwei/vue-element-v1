<template>
  <div>
  <el-row class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="svg-icon el-icon-user-solid"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">用户</div>
          <count-to :start-val="0" :end-val="12" :duration="1" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="svg-icon el-icon-s-comment"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">评论</div>
          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="svg-icon el-icon-s-promotion"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">文章</div>
          <count-to :start-val="0" :end-val="4321" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="svg-icon el-icon-s-marketing"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">浏览</div>
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
    <echarts-tpl></echarts-tpl>
  </div>
</template>
<script>

    import router from '../../router'
    import CountTo from 'vue-count-to'
    import echartsTpl  from './echartsTpl';
    import { mapState } from 'vuex'

    export default {
        name: 'index',
        data(){
          return {}
        },
        methods: {
            echartsRend() {
                var chartDom = document.getElementById('echartWrap');
                var myChart = echarts.init(chartDom);
                myChart.setOption(this.option);
            }
         },
        components: {
            router,
            CountTo,
            echartsTpl
        }
    }
</script>
<style lang="stylus" scoped>
   .panel-group {
    margin-top: 18px;
    margin-right 50px;
    margin-left 50px;
    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      color: #666;
      margin-left 10px;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border solid 1px #d8d8d8
      border-radius 5px;
      i{
        font-size: 50px;
      }
      &:hover {
        border solid 1px #999
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-people {
          background: #40c9c6;
        }

        .icon-message {
          background: #36a3f7;
        }

        .icon-money {
          background: #1babe5;
        }

        .icon-shopping {
          background: #34bfa3
        }
      }

      .icon-people {
        border solid 1px #40c9c6
        color: #40c9c6;
      }

      .icon-message {
        border solid 1px #36a3f7
        color: #36a3f7;
      }

      .icon-money {
        border solid 1px #1babe5
        color: #1babe5;
      }

      .icon-shopping {
        border solid 1px #34bfa3
        color: #34bfa3
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width:550px) {
    .card-panel-description {
      display: none;
    }
    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;
      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }
</style>
