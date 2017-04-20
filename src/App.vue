<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/users/1">Users 1</router-link>
    <router-link to="/users/2">Users 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>