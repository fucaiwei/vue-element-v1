<template>
  <div>
  <div id="echartWrap"></div>
  </div>
</template>
<script>
    import * as echarts from 'echarts';
    export default {
        name: 'echartsTpl',
        data(){
          return {
              option : {
                  title: {
                      text: '网站统计',
                      padding: [0, 0, 0, 40]
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  toolbox: {
                      feature: {
                          saveAsImage: false
                      }
                  },
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  series: [
                      {
                          name: '邮件营销',
                          type: 'line',
                          stack: '总量',
                          data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                          name: '联盟广告',
                          type: 'line',
                          stack: '总量',
                          data: [220, 182, 191, 234, 290, 330, 310]
                      },
                      {
                          name: '视频广告',
                          type: 'line',
                          stack: '总量',
                          data: [150, 232, 201, 154, 190, 330, 410]
                      },
                      {
                          name: '直接访问',
                          type: 'line',
                          stack: '总量',
                          data: [320, 332, 301, 334, 390, 330, 320]
                      },
                      {
                          name: '搜索引擎',
                          type: 'line',
                          stack: '总量',
                          data: [820, 932, 901, 934, 1290, 1330, 1320]
                      }
                  ]
              }
          }
        },
        methods: {
            echartsRend() {
                var chartDom = document.getElementById('echartWrap');
                var myChart = echarts.init(chartDom);
                myChart.setOption(this.option);
            }
         },
        components: {
            echarts
        },
        mounted() {
            this.echartsRend();
        }
    }
</script>
<style lang="stylus" scoped>
  #echartWrap{
    width 100%;
    height 500px;
  }
</style>
