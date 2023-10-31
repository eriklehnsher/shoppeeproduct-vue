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
      <font-awesome-icon :icon="['fas', i <= currentRating ? 'star' : 'star-o']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

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
      hoverRating: 0,
    };
  },
  methods: {
    selectRating(rating) {
      this.currentRating = rating;
    },
    hoverRating(rating) {
      this.hoverRating = rating;
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
