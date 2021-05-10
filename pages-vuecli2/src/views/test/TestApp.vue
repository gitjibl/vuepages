<template>
    <div>
      <h1>TestApp page .....</h1>
      <ul>
          <li v-for="(item,index) in dataMap" :key="index">{{index}}:{{item}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataMap: []
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
    this.getData();
  }
};
</script>

