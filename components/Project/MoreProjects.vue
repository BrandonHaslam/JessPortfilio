<template>
    <div class="px-4 lg:px-24">
        <div
            :style="{
                borderColor: borderStyles,
            }"
            class="border-t w-3/4 mx-auto"
        />
        <br />
        <h2 class="text-center text-[4.2rem] font-bold mt-16">More Projects</h2>
        <PortfolioProjectList :projects="currentProjects" />
    </div>
</template>
<script>
export default {
    name: "MoreProjects",
    components: {
        PortfolioProjectList: () =>
            import("~/components/Portfolio/ProjectList.vue"),
    },
    data: () => ({
        allProjects: [],
        currentProjects: [
            {
                title: "InStyle Aesthetics",
                directory: "InstyleAesthetics",
                category: "Website",
                card: {
                    foreground: "InstyleImage.png",
                    background: "InstyleBackground.png",
                },
                path: "/projects/InstyleAesthetics",
                extension: ".json",
            },
            {
                title: "Me, Myself & I",
                directory: "MMI",
                category: "Website",
                card: {
                    foreground: "MmiImage.png",
                    background: "MmiBackground.png",
                },
                path: "/projects/MMI",
                extension: ".json",
            },
            {
                title: "Vault",
                directory: "Vault",
                category: "Application",
                card: {
                    foreground: "VaultImage.png",
                    background: "VaultBackground.png",
                },
                path: "/projects/Vault",
                extension: ".json",
            },
        ],
    }),
    async fetch() {
        this.allProjects = await this.$content("projects")
            .only(["title", "directory", "card", "category"])
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });
    },
    computed: {
        borderStyles() {
            if (this.$route.params.project) {
                return this.$store.state.projectStyles.colorDark;
            }
            return "#C275FF";
        },
    },
};
</script>