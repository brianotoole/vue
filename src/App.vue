<template>
  <div id="app">
    
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item logo">LOGO</router-link>
          <router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
          <router-link to="/users/:1" class="nav-item is-tab is-hidden-mobile">Users 1</router-link>
          <router-link to="/users/:2" class="nav-item is-tab is-hidden-mobile">Users 2</router-link>
        </div><!--/.nav-left-->
        <span class="nav-toggle"><span></span><span></span><span></span></span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-mobile">item</a>
          <a class="nav-item is-tab is-hidden-mobile">item</a>
        </div><!--/.nav-right-->
      </div><!--/.container-->
    </nav>
    
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
@import './assets/app.scss';
.header {
  width: 100%;
  margin: 0;
  padding: calc-em(20px) 0;
  background: $black;
  border-bottom: 1px solid $primary;
}
.nav {
  li {
    display: inline-block;
  }
  li a {
    padding: calc-em(10px);
    color: $secondary;
    text-decoration: none;
  }
}
</style>