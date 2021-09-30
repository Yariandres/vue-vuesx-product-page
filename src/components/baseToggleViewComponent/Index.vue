<template>
  <div
    class="
      toggle-button-container
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <div class="toggle-list-icon" @click="displayList">
      <b-icon icon="card-list" aria-hidden="true" scale="3.25"></b-icon>
    </div>

    <div class="toggle-grid-icon" @click="displayGrid">
      <b-icon icon="grid" aria-hidden="true" scale="3.25"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsDisplay: "",
    };
  },

  methods: {
    displayList() {
      this.cardsDisplay = [
        "list-view",
        "flex-column",
        "justify-content-center",
      ];
      this.isList = "is-active";
      this.isGrid = "";
      this.$emit("updateCardsDisplay", this.cardsDisplay);
    },

    displayGrid() {
      this.cardsDisplay = "flex-row";
      this.isList = "";
      this.isGrid = "is-active";
      this.$emit("updateCardsDisplay", this.cardsDisplay);
    },
  },
};
</script>

<style scoped>
.toggle-button-container {
  width: 70px;
}

.toggle-list-icon,
.toggle-grid-icon {
  cursor: pointer;
}
</style>