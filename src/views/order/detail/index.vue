<template src="./tpl.html"></template>
<script>
  import img_upload from 'component/img_upload/'

    export default{
        components: {img_upload},
        data() {
          return {
            dialogVisible: false,
            remarkDialog: false,
            remark: '',
            tableData: [{
              date: '2000',
              name: '王小虎',
              address: '上海市'
            }, {
              date: '1203',
              name: '王小虎',
              address: '上海市'
            }]
          }
        },

        mounted(){

        },

        methods: {
            handleIconClick(ev) {
                console.log(1)
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleCurrentChange(){

            },
            completed(){
                this.$confirm('是否提交完成该订单？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$message({
                    type: 'success',
                    message: '提交成功!'
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消提交'
                  });          
                });
            }

        }
    }
</script>