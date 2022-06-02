<template>
    <main>
        <h1 :class="`text-[${color}]`">{{ this.$route.params.project }}</h1>
        <h2>{{ page.title }}</h2>
    </main>
</template>
 
<script>
export default {
    async asyncData({ $content, params, error }) {
        const slug = `projects/${params.project}` || "index";
        const page = await $content(slug)
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });

        return {
            page,
        };
    },
    mounted() {
        // let body = document.querySelector("body");
        // body.style.background = this.page.bgColor;
        // body.style.color = this.page.color;
    },
};
</script>
<style scoped>
body {
    background: #050020;
}
h1 {
    font-size: 40px;
    color: "--project-base-color-1";
}
</style>

