<template>
  <div>
    <h1>Users page</h1>
    <p><strong>User Id:</strong> {{ $route.params.userId }}</p>
    <button @click="goHome">Back to Homepage</button>
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