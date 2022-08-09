<template>
    <main
        :style="`backgroundColor: ${this.$store.state.projectStyles.colorDarkest}`"
    >
        <Hero :hero="page.content.hero" :directory="page.directory" />
        <DevicePreview
            v-if="page.content.preview"
            :previewImages="page.content.preview"
            :directory="page.directory"
        />
        <Preview
            v-if="page.content.previewImages"
            :images="page.content.previewImages"
            :directory="page.directory"
        />
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
        DevicePreview: () =>
            import("~/components/Project/DevicePreview/DevicePreview.vue"),
        Details: () =>
            import("~/components/Project/ProjectDetails/Details.vue"),
        Preview: () => import("~/components/Project/Preview.vue"),
        DesktopScreenShots: () =>
            import("~/components/Project/DesktopScreenShots.vue"),
        Solution: () => import("~/components/Project/Solution.vue"),
        MobileScreenShots: () =>
            import("~/components/Project/MobileScreenShots.vue"),
        StyleSheet: () => import("~/components/Project/StyleSheet.vue"),
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
        MoreProjects: () => import("~/components/Project/MoreProjects.vue"),
    },
    mounted() {
        this.$store.commit("setColours", this.pageStyles);
        this.$store.commit("setDirectory", this.page.directory);
    },
};
</script>
<style scoped>
h1 {
    font-size: 40px;
}
</style>

