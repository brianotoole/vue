<template>
  <div id="app">

    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item logo">LOGO</router-link>
      </div><!--/.nav-left-->
      <div class="nav-right">
        <router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
        <router-link to="/users/:1" class="nav-item is-tab is-hidden-mobile">Users 1</router-link>
        <router-link to="/users/:2" class="nav-item is-tab is-hidden-mobile">Users 2</router-link>
      </div><!--/.nav-right-->
    </nav>

  <router-view></router-view>

</div><!--/.app-->
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
@import './assets/scss/app.scss';
.header {
  width: 100%;
  margin: 0;
  padding: calc-em(20px) 0;
  background: $black;
  border-bottom: 1px solid $primary;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: calc-em(20px) calc-em(10px);
  background-color: $black;
  .nav-left,
  .nav-right {
    width: 100%;
  }
  @include breakpoint(md) {
    .nav-left {
      width: 33.333%;
    }
    .nav-right {
      width: auto;
      margin-left: auto;
    }
  }
  a {
    color: $white;
    text-decoration: none;
    padding: 0 calc-em(20px);
  }
}
</style>
