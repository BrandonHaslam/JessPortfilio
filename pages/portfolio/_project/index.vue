<template>
    <main>
        <Hero
            :hero="page.content.hero"
            :directory="page.directory"
            :styles="page.styles"
        />
        <!-- <Preview /> -->
        <Details :details="page.content.projectDetails" :styles="page.styles" />
        <!-- <DesktopScreenShots /> -->
        <!-- <Solution /> -->
        <!-- <MobileScreenShots /> -->
        <!-- <StyleSheet /> -->
        <!-- <MoreProjects /> -->
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
            pageStyles: page.styles,
        };
    },
    layout: "portfolio",
    components: {
        Hero: () => import("@/components/Project/ProjectHero.vue"),
        Details: () =>
            import("~/components/Project/ProjectDetails/Details.vue"),
    },
    beforeCreate() {
        // console.log("beforeCreate");
        // root.style.setProperty("--project-main-background", "#fafafa");
    },
    mounted() {
        let rootBefore = this.$store.state.projectStyles;
        console.log("rootBefore", rootBefore);

        this.$store.commit("setColours", this.pageStyles);
        let rootAfter = this.$store.state.projectStyles;
        console.log("rootAfter", rootAfter);
        // let body = document.querySelector(".project");
        // body.style.background = this.page.styles.bgColor;
        // body.style.color = this.page.styles.color;
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

