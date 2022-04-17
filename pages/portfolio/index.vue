<template>
    <main class="absolute top-0 w-full">
        <section
            class="section-colour flex justify-center items-center text-center"
        >
            <div>
                <h1 class="text-[3rem] sm:text-[5rem]">{{ page.title }}</h1>
                <button
                    v-for="category in categories"
                    :key="`${category} button`"
                    :aria-label="`${category} button`"
                    class="
                        border border-[#C275FF]
                        p-4
                        rounded-2xl
                        text-[#C275FF]
                        hover:bg-[#C275FF] hover:text-white
                        font-medium
                        sm:text-[1.75rem]
                    "
                >
                    {{ category }}
                </button>
            </div>
        </section>
        <ul>
            <li v-for="project in projects" :key="project.name">
                <!-- <ProductCard :project="project" /> -->
                <a :href="`portfolio/${project.link}`">
                    {{ project.name }}
                </a>
            </li>
        </ul>
    </main>
</template>
 
<script>
export default {
    async asyncData({ $content, params, error }) {
        const page = await $content("portfolio")
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });
        return {
            page,
            projects: page.projects,
        };
    },
    mounted() {
        let body = document.querySelector("body");
        body.style.background = this.page.bgColor;
        body.style.color = this.page.color;
    },
    computed: {
        categories() {
            return this.projects.map((e) => e.category);
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