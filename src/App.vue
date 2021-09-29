<template>
  <div id="app">
    <base-navbar>
      <span slot="home">
        <router-link to="/">Home</router-link>
      </span>

      <span slot="form">
        <router-link to="/form">Form</router-link>
      </span>
    </base-navbar>

    <router-view />
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  /* 1rem = 10px */
  box-sizing: border-box;
  color: #f1f2f6;
  line-height: 1.6;
}

body {
  font-family: "Raleway", sans-serif !important;
}
</style>