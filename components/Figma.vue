<template>
    <div>
        <!-- <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1)"
      width="800"
      height="450"
      :src="blok.link.url"
      loading="lazy"
      allowfullscreen
    ></iframe> -->
        <h1>{{ blok.text }}</h1>
        <button>hello</button>
    </div>
</template>
<script>
export default {
    name: "FigmaFrame",
    props: {
        blok: {
            type: Object,
            required: true,
        },
    },
};
</script>