<template>
    <main>
        <Hero :hero="page.content.hero" :directory="page.directory" />
        <!-- <Preview /> -->
        <Details :details="page.content.projectDetails" :styles="page.styles" />
        <DesktopScreenShots :screen-shots="page.content.screenShots[0]" />
        <Solution :solution="page.content.solution" />
        <MobileScreenShots :screen-shots="page.content.screenShots[1]" />
        <StyleSheet :stylesheet="page.content.components" />
        <MoreProjects />
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
        DesktopScreenShots: () =>
            import("~/components/Project/DesktopScreenShots.vue"),
        Solution: () => import("~/components/Project/Solution.vue"),
        MobileScreenShots: () =>
            import("~/components/Project/MobileScreenShots.vue"),
        StyleSheet: () => import("~/components/Project/StyleSheet.vue"),
        MoreProjects: () => import("~/components/Project/MoreProjects.vue"),
    },
    mounted() {
        this.$store.commit("setColours", this.pageStyles);
        this.$store.commit("setDirectory", this.page.directory);
    },
};
</script>
<style scoped>
body {
    background: rgb(5, 0, 32);
}
h1 {
    font-size: 40px;
}
</style>

