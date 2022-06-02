<template>
    <main class="w-full">
        <section
            class="section-colour flex justify-center items-center text-center"
        >
            <div class="overflow-hidden">
                <h1 class="text-[3rem] sm:text-[7.5rem] mt-12">Portfolio</h1>
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
        ProjectListCard: () => import("~/components/Portfolio/ListCard.vue"),
    },

    async asyncData({ $content, params, error }) {
        const page = await $content("/projects")
            .only(["title", "directory", "category"])
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });
        console.log("page", page);
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
            let categories = this.page
                .map((e) => e.category)
                .filter((v, i, a) => {
                    return a.indexOf(v) === i && v !== undefined && v !== "";
                });
            return categories;
        },
        currentProjects() {
            if (this.currentCategory) {
                let category = this.page.filter(
                    (e) => e.category === this.currentCategory
                );
                console.log(this.page);
                return category;
            }
            console.log(this.page);
            return this.page;
        },
    },
    methods: {
        setCurrentCategory(category) {
            this.currentCategory = category;
            // console.log("setCurrentCategory", category);
        },
    },
};
</script>
<style lang="postcss" scoped>
.section-colour {
    background: linear-gradient(265deg, #050020 0%, #34005c 100.63%);
    border-radius: 0px 0px 122px 122px;
    @apply w-full min-h-[40vh];
}
</style>