<template>
    <section class="p-layout py-8 mt-16">
        <ul class="flex flex-wrap w-full text-center justify-center">
            <li v-for="project in projects" :key="project.name">
                <ProjectListCard :project="project" />
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "ProjectList",
    components: {
        ProjectListCard: () => import("~/components/Portfolio/ListCard.vue"),
    },

    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>