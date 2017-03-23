<template>
    <div>
      <router-view></router-view>
      <list v-if="path"></list>
    </div>
</template>

<script>
    import list from './list'
    import './style/style.less'
    export default {
        created() {
            this.path = this.$route.name === "order";
        },

        data(){
            return{
                path: false
            }
        },

        watch: {
            $route: function(val) {
                this.path = val.name === "order";
            } 
        },

        components: { list }
    }

</script>
