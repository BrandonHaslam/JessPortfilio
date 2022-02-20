<template>
  <h1>{{blok.text}}</h1>
</template>
<script>
export default {
  name: 'HeaderStoryBlok',
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
// Delete me