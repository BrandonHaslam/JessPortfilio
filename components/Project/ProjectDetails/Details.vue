<template>
    <div class="details">
        <h2 class="text-center mt-16 text-[4.2rem] font-bold">
            Project Details
        </h2>
        <div class="details xs:flex flex-wrap justify-evenly mt-16">
            <DetailsCard
                v-for="card in details"
                :key="card.title"
                :data="card"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectDetails",
    components: {
        DetailsCard: () =>
            import("@/components/Project/ProjectDetails/DetailsCard.vue"),
    },
    data() {
        return {
            color: "red",
        };
    },
    props: {
        details: {
            type: Array,
            required: true,
        },
        styles: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        // console.log("page", this.$route.meta.theme);
    },
};
</script>