<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Users</h1>
        <h2 class="subtitle"><strong>User Id:</strong> {{ $route.params.userId }}</h2>
        <button @click="goHome">Back to Homepage</button>
      </div>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    watch: {
      '$route' (to, from) {
        //console.log(this.$route.params.userId);
      }
    },
    created() {
      //console.log(this.$route.params.userId);
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>