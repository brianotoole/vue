<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/users/1">Users 1</router-link></li>
          <li><router-link to="/users/2">Users 2</router-link></li>
        </nav>
      </div>
    </header>
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

<style lang="sass">
@import './assets/main.scss';

.header {
  width: 100%;
  background: $black;
}
.nav {
  li {
    display: inline-block;
  }
  li a {
    padding: 5px;
    color: $secondary;
  }
}
</style>