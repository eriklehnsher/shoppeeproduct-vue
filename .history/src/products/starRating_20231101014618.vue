<template>
  <div>
    <div
      v-for="(star, index) in maxStars"
      :key="index"
      @click="selectRating(star)"
      @mouseover="hoverRating(star)"
      @mouseleave="resetHover"
      class="star"
    >
      <font-awesome-icon
        :icon="['fas', star <= currentRating ? 'star' : 'star-o']"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
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
  color: #ffc107;
}
</style>
