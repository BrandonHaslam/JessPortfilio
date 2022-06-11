<template>
    <div
        class="
            rounded-3xl
            text-center
            p-8
            my-8
            md:my-8
            basis-4/5
            sm:basis-2/5
            lg:basis-1/5
            detailCard
        "
    >
        <h3 :style="{ color: cardStyles }">{{ data.title }}</h3>
        <p>{{ data.description }}</p>
    </div>
</template>
<script>
export default {
    name: "DetailsCard",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        cardStyles() {
            return this.$store.state.projectStyles.colorTwo;
        },
    },
};
</script>
<style>
.detailCard {
    background: rgba(var(--project-main-background), 1);
}
</style>