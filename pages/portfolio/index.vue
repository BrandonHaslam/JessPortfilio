<template>
    <main class="w-full">
        <section
            class="section-colour flex justify-center items-center text-center"
        >
            <div>
                <h1 class="text-[3rem] sm:text-[5rem] text-blue-500">
                    {{ page.title }}
                </h1>
                <PortfolioProjectButtonList
                    @setCurrentCategory="setCurrentCategory($event)"
                    :categories="categories"
                />
            </div>
        </section>
        <PortfolioProjectList :projects="currentProjects" />
    </main>
</template>
 
<script>
export default {
    components: {
        PortfolioProjectList: () =>
            import("~/components/Portfolio/ProjectList.vue"),
        PortfolioProjectButtonList: () =>
            import("~/components/Portfolio/ProjectButtonList.vue"),
    },
    async asyncData({ $content, params, error }) {
        const page = await $content("portfolio")
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });
        return {
            page,
            currentCategory: "",
        };
    },
    // data: () => ({}),
    mounted() {
        let body = document.querySelector("body");
        body.style.background = this.page.bgColor;
        body.style.color = this.page.color;
    },
    computed: {
        categories() {
            return this.page.projects
                .map((e) => e.category)
                .filter((v, i, a) => {
                    return a.indexOf(v) === i && v !== undefined;
                });
        },
        currentProjects() {
            if (this.currentCategory) {
                return this.page.projects.filter(
                    (e) => e.category === this.currentCategory
                );
            }
            return this.page.projects;
        },
    },
    methods: {
        setCurrentCategory(category) {
            this.currentCategory = category;
            console.log("setCurrentCategory", category);
        },
    },
};
</script>
<style lang="postcss" scoped>
.section-colour {
    background: linear-gradient(282.06deg, #050020 0%, #34005c 100.63%);
    border-radius: 0px 0px 122px 122px;
    @apply w-full min-h-[50vh] sm:h-[60vh];
}
</style>