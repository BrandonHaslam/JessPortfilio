<template>
    <!-- <div :style="{ borderColor: styles }" class="border-t">card</div>
    h3 -->
    <div>
        <h3>More Projects</h3>
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
        currentProjects: [],
    }),
    // fetch() {},
    async fetch() {
        this.allProjects = await this.$content("projects")
            .only(["title", "directory", "card"])
            .fetch()
            .catch((err) => {
                error({ statusCode: 404, message: "Page not found" });
            });
    },
    mounted() {
        this.getRandomProject();
    },
    methods: {
        getRandomProject() {
            let remainingProjects = this.allProjects;
            let randomProjects = [];

            let number = Math.floor(Math.random() * remainingProjects.length);
            randomProjects.push(remainingProjects[number]);
            remainingProjects.splice(number, 1);

            number = Math.floor(Math.random() * remainingProjects.length);
            randomProjects.push(remainingProjects[number]);
            remainingProjects.splice(number, 1);

            number = Math.floor(Math.random() * remainingProjects.length);
            randomProjects.push(remainingProjects[number]);
            remainingProjects.splice(number, 1);

            this.currentProjects = randomProjects;
            // return randomProjects
        },
    },
};
</script>