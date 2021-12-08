<template>
    <div>
        <p>这是app.vue</p>
        <p>{{ message }}</p>
        <Cpn />
    </div> 
</template>

<script>

import Cpn from './cpn.vue'
export default {
    name:'App',
     data(){
        return {
            message:'Hello Webpack'
        }
    },
    components:{
        Cpn
    }
}
</script>

<style scoped>
p:first-child{
    color: red;
}
</style>
