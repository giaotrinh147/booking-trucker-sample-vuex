<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <h2>Truckers</h2>
    <TruckerList></TruckerList>
    <hr>
    <BookedList></BookedList>
  </div>
</template>

<script>
import TruckerList from './components/TruckerList.vue'
import BookedList from './components/BookedList.vue'

export default {
  name: 'app',
  components: {
    TruckerList,
    BookedList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
