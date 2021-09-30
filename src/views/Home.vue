<template>
  <b-container>
    <div class="my-5">
      <!-- TODO 
        listen to the event and update carsDisplay var
       -->
      <base-toggle-view-component></base-toggle-view-component>
    </div>

    <base-card-component :cardsDisplay="cardsDisplay"></base-card-component>
  </b-container>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      cardsDisplay: "",
    };
  },
};
</script>
