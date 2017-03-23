<template src="./tpl.html"></template>
<script>
import map from 'view/order/map.js'
import img_upload from 'component/img_upload/'
    export default {
        components: {img_upload},
        data() {
            return {
                dialogVisible: false,
                remarkDialog: false,
                remark: '',
                ...map.LIST
            }
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

            }

        }
    }

</script>