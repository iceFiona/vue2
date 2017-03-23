<template>
    <div>
       <nav_menu></nav_menu>
        <div class="wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import nav_menu from 'component/nav_menu'

export default {

    mounted(){

    },

    // 顶级变量必须设置默认值方能引入 observer
    data () {
        return {

        }
    },
    
    components: {
        nav_menu
    },
}
</script>
