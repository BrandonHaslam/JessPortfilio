<template>
  <div v-editable="blok" class="px-6">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>
 
<script>
export default {
  // data: () => ({}),
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setColours() {
      let body = document.querySelector("body");
      let storyBlokBackgroundColour = this.blok.BackgroundColour.color;
      let storyBlokTextColour = this.blok.TextColour.color;

      storyBlokBackgroundColour
        ? (body.style.background = storyBlokBackgroundColour)
        : (body.style.background = "white");

      storyBlokTextColour
        ? (body.style.color = storyBlokTextColour)
        : (body.style.background = "black");
    },
  },
  mounted() {
    this.setColours();
  },
};
</script>