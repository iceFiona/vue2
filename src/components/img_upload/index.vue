<template src="./tpl.html"></template>
<script>
    import './style.less'
    export default{
        props: ['visible'],
        data(){
            return{
                dialogImageUrl: '',
                PreviewVisible: false,
                dialogVisible: false
            }
        },
        watch: {
            visible: function(val){
                this.dialogVisible = val;
            },
            dialogVisible: function(val){
                this.$parent.dialogVisible = val;

            }
        },
        methods: {

            handlePreview(file){
                this.dialogImageUrl = file.url;
                this.PreviewVisible = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
        }
    }
</script>