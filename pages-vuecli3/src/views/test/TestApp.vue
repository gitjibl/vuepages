<template>
  <div>
    <h1>this is TestApp page ......</h1>
    <h2>{{message}}</h2>
    <button @click="test">按钮</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data(){
        return{
            message:message
        }
    },
    methods:{
        test(){
            sayhello()
        }
    }
};
</script>

