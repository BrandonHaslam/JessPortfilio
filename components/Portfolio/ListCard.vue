<template>
    <a :href="`portfolio/${project.link}`" class="text-left text-[#3D307B]">
        <div
            class="
                relative
                card
                w-[30rem]
                h-[30rem]
                sm:w-[40rem] sm:h-[40rem]
                rounded-3xl
                flex
                justify-center
                align-center
                p-8
                bg-cover
                mx-16
            "
        >
            <img
                class="self-center rounded-3xl shadow-lg shadow-black !block"
                :src="require(`~/assets/images/projects/${image}/Card.png`)"
                alt=""
            />
        </div>
        <div class="px-16 w-full mb-20">
            <h2 class="text-[2.4rem] mt-4">
                {{ project.name }}
            </h2>
            <span class="text-[2rem] flex items-baseline">
                {{ project.category }}
                <Arrow class="ml-auto" />
            </span>
        </div>
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
    components: {
        Arrow: () => import("@/assets/images/projects/arrow.svg"),
    },
    computed: {
        image() {
            return this.project?.link ? this.project.link : "Placeholder";
        },
    },
    mounted() {
        // addbackgroundimage
        this.$el.querySelector(
            "div"
        ).style.backgroundImage = `url(${require(`~/assets/images/projects/${this.project.link}/CardBackground.png`)})`;
    },
};
</script>
<style scoped>
.card {
    /* opacity: 0.7; */
    transition: all 0.75s;
    z-index: 10;
}
.card:hover {
    transition: all 0.75s;
    /* opacity: 1; */
}
.card:hover:before {
    transform: scale(1.05) rotate(0deg);
    transition: all 0.75s;
    /* opacity: 1; */
    @apply border-[#C275FF];
}
.card:before {
    content: "";
    @apply rounded-3xl border-2 border-[#1A133E] absolute top-0 left-0 w-full h-full transition-all duration-700 rotate-12 scale-105;
}
</style>