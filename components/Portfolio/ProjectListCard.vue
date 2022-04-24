<template>
    <a :href="`portfolio/${project.link}`">
        <div
            class="
                card
                h-48
                w-64
                sm:w-[40rem] sm:h-[40rem]
                m-8
                border
                bg-red-800
                rounded-3xl
            "
        >
            <h1>{{ project.category }}</h1>
            <img
                :src="require(`~/assets/images/projects/${image}/Card.png`)"
                alt=""
            />
        </div>
        {{ project.name }}
    </a>
</template>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    computed: {
        image() {
            return this.project.link ? this.project.link : "Placeholder";
        },
    },
};
</script>
<style scoped>
</style>