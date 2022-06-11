<template>
    <section class="p-layout py-8 mt-32">
        <ul class="flex flex-wrap w-full text-center justify-center">
            <li
                v-for="(project, index) in projects"
                :key="project.title + index"
            >
                <ProjectListCard :project="project" />
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "ProjectList",
    components: {
        ProjectListCard: () => import("~/components/Portfolio/ProjectCard.vue"),
    },

    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>