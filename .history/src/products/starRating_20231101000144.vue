<template>
  <div>
    <div
      v-for="i in maxStars"
      :key="i"
      @click="selectRating(i)"
      @mouseover="hoverRating(i)"
      @mouseleave="resetHover"
      class="star"
    >
      <font-awsome-icon :icon="['fas', 'fa-star', { 'filled': i <= currentRating, 'hovered': i <= hoverrating }]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentRating: this.initialRating,
      hoverrating: 0,
    };
  },
  methods: {
    selectRating(rating) {
      this.currentRating = rating;
    },
    hoverRating(rating) {
      this.hoverrating = rating;
    },
    resetHover() {
      this.hoverRating = 0;
    },
  },
};
</script>

<style scoped>
.star {
  display: inline-block;
  cursor: pointer;
  font-size: 1.5em;
  padding: 5px;
}

.star i.fas.hovered {
  color: orange;
}

.star i.fas.filled {
  color: orange;
}
</style>
