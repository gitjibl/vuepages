<template>
  <div>
    <h1>IndexApp page .....</h1>
    <h2>{{message}}</h2>
    <ul>
      <li v-for="(item,index) in dataMap" :key="index">{{index}}:{{item}}</li>
    </ul>
  </div>
</template>
<script>
import helloWord from '@assets/js/helloWord'
export default {
  data() {
    return {
      dataMap: [],
      message:helloWord.message
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("/api/getData", {
          params: {}
        })
        .then(res => {
          console.log(res.data);
          this.dataMap = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // this.getData();
  }
};
</script>

