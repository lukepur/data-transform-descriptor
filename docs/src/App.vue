<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1>data-transform-descriptor</h1>
        </div>
      </div>
      <div class="row">
        <router-view class="col"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 16px;
}
</style>
