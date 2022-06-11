<template>
    <div class="details xs:flex flex-wrap justify-evenly my-8">
        <DetailsCard v-for="card in details" :key="card.title" :data="card" />
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

<style>
.text {
    color: v-bind(color);
}
</style>