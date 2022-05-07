<template>
    <main class="w-full">
        <section
            class="section-colour flex justify-center items-center text-center"
        >
            <div>
                <h1 class="text-[3rem] sm:text-[7.5rem] mb-12">
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
    layout: "portfolio",
    components: {
        PortfolioProjectList: () =>
            import("~/components/Portfolio/ProjectList.vue"),
        PortfolioProjectButtonList: () =>
            import("~/components/Portfolio/ButtonList.vue"),
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
    background: linear-gradient(265deg, #050020 0%, #34005c 100.63%);
    border-radius: 0px 0px 122px 122px;
    @apply w-full min-h-[50vh];
}
</style>