<template>
    <main class="w-full">
        <section
            class="section-colour flex justify-center items-center text-center"
        >
            <div class="overflow-hidden">
                <h1
                    class="
                        text-[3.5rem]
                        sm:text-[5.5rem]
                        md:text-[6.5rem]
                        lg:text-[7.5rem]
                        mt-20
                        font-bold
                    "
                >
                    Portfolio
                </h1>
                <PortfolioProjectButtonList
                    @setCurrentCategory="setCurrentCategory($event)"
                    :categories="categories"
                />
            </div>
        </section>
        <PortfolioProjectList :projects="currentProjects" />
        <div class="w-full flex justify-center mb-24">
            <div class="line" />
        </div>
    </main>
</template>
 
<script>
export default {
    layout: "portfolio",
    components: {
        PortfolioProjectButtonList: () =>
            import("~/components/Portfolio/ButtonList.vue"),
        PortfolioProjectList: () =>
            import("~/components/Portfolio/ProjectList.vue"),
    },

    async asyncData({ $content, params, error }) {
        const page = await $content("/projects")
            .only(["title", "directory", "category", "card"])
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
                return category;
            }
            return this.page;
        },
    },
    methods: {
        setCurrentCategory(category) {
            this.currentCategory = category;
        },
    },
};
</script>
<style  scoped>
.section-colour {
    background: linear-gradient(265deg, #050020 0%, #34005c 100.63%);
    border-radius: 0px 0px 122px 122px;
    @apply w-full min-h-[30vh];
}
.line {
    width: 15vw;
    height: 1rem;
    background: rgba(26, 19, 62, 1);
    border-radius: 10px;
}
</style>