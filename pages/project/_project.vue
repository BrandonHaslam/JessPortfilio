<template>
    <main class="project">
        <h1>{{ page.title }}</h1>
        <h2>{{ page.description }}</h2>
        <a :href="page.figma"><FigmaIcon />View Figma</a>
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
        let body = document.querySelector(".project");
        body.style.background = this.page.bgColor;
        body.style.color = this.page.color;
    },
};
</script>
<style scoped>
body {
    background: #050020;
}
h1 {
    font-size: 40px;
}
</style>

