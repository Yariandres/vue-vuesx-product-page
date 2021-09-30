<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="py-4">
    <b-container>
      <b-navbar-brand href="#">AWESOME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home</router-link>
          <router-link to="/form">Form</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  font-size: 20px;
  margin: 0 20px 0 0;
}

a:hover,
a:active,
.router-link-exact-active {
  color: pink;
}
</style>