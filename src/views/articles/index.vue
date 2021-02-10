<template>
  <div class="article">
    <el-table
            ref="singleTable"
            v-loading="loading"
            :data="tableData"
            :border="true"
            highlight-current-row
            class="articles"
            style="width: 100%">
      <el-table-column
              property="id"
              label="ID"
              width="50">
      </el-table-column>

      <el-table-column
              property="title"
              label="标题">
      </el-table-column>

      <el-table-column
              property="author"
              label="作者"
              width="120">
      </el-table-column>

      <el-table-column
              property="time"
              label="日期"
              width="120">
      </el-table-column>
      <el-table-column  width="190" label="操作">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block tc mt50">
      <el-pagination
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              background
              layout="total,prev, pager, next"
              :total="100">
      </el-pagination>
    </div>

    <el-dialog
            title="提示"
            :visible="dialogVisible"
            :show-close="false"
            :append-to-body="false"
            :modal-append-to-body="false"
            width="30%">
      <span>这操作删除一条数据</span>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleDelete(currentDel,true)">确 定</el-button>
    </span>
    </el-dialog>
  </div>

</template>
<script>

    import { request }  from '../../mock/request'
    import { Mock,list }  from '../../mock/api/articles'//mock 模拟数据

    export default {
        name: 'articles',
        data(){
            return {
                tableData: [],
                dialogVisible: false,
                currentPage: 1,
                currentDel: 1,
                loading: true
            }
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push({ name: 'articles-edit', params: row})
            },
            handleDelete(index,type = false) {
                this.dialogVisible = true
                this.currentDel = index
                if(!type) return false;

                this.$message({message: '删除成功！', type: 'success'});
                this.tableData.splice(index,1);
                this.dialogVisible = false
            },
            handleCurrentChange(val) {
                var _this = this;
                _this.loading = true
                request
                    .post(list.url,{page:val,limit:10})
                    .then(function (data) {
                        _this.loading = false
                        _this.tableData = data.data;
                    })
            }
         },

        mounted(){
            var _this = this;
            Mock.mock(list.url,list.response);
            request.post(list.url)
            .then(function (data) {
                _this.loading = false
                _this.tableData = data.data;
            })
        }

    }
</script>
<style lang="stylus" scoped>
  .articles{
     width 80%;
  }
</style>
