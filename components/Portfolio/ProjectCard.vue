<template>
    <NuxtLink
        :to="`/portfolio/${project.directory}`"
        class="container text-left duration-700"
    >
        <div
            class="
                relative
                card
                w-[25rem]
                h-[25rem]
                md:w-[30rem] md:h-[30rem]
                3xl:w-[35rem] 3xl:h-[35rem]
                mx-16
            "
        >
            <div
                class="
                    flex
                    justify-center
                    align-center
                    w-full
                    h-full
                    cardBackground
                    p-8
                    bg-cover
                    overflow-hidden
                    rounded-3xl
                    z-10
                "
                :style="{
                    backgroundImage: `url(${require(`~/assets/images/projects/${this.project.directory}/${this.project.card.background}`)})`,
                }"
            >
                <img
                    v-if="image"
                    class="
                        self-center
                        rounded-3xl
                        shadow-lg shadow-black
                        !block
                    "
                    :src="
                        require(`~/assets/images/projects/${project.directory}/${project.card.foreground}`)
                    "
                    alt=""
                />
            </div>
        </div>
        <div class="px-24 w-full mb-20 md:text-[#3D307B]">
            <h2 class="text-[2rem] md:text-[2.4rem] mt-4">
                {{ project.title }}
            </h2>
            <span
                class="
                    card-text
                    text-[#c275ff]
                    md:text-[#3D307B]
                    text-base
                    md:text-[2rem]
                    flex
                    items-baseline
                "
            >
                {{ project.category }}
                <Arrow class="ml-auto arrow" />
            </span>
        </div>
    </NuxtLink>
</template>
<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    components: {
        Arrow: () => import("@/assets/images/Arrow.svg"),
    },
    computed: {
        image() {
            return this.project?.cardImage
                ? this.project.cardImage
                : "Placeholder";
        },
    },
    // mounted() {
    //     // addbackgroundimage
    //     this.$el.querySelector(
    //         ".cardBackground"
    //     ).style.backgroundImage = `url(${require(`~/assets/images/projects/${this.project.directory}/${this.project.card.background}`)})`;
    // },
};
</script>
<style scoped>
.card {
    @apply md:opacity-70;
    transition: all 0.7s;
    z-index: 10;
}
.card:hover {
    transition: all 0.7s;
    opacity: 1;
}
.container:hover .card-text {
    color: #c275ff !important;
    transition: all 0.7s;
}
.container:hover h2 {
    color: white;
    transition: all 0.7s;
}
.card:hover:before {
    transform: scale(1.05) rotate(0deg);
    transition: all 0.7s;
    opacity: 1;
    @apply border-[#C275FF];
}
.card:before {
    content: "";
    @apply -z-10 rounded-3xl border-2 border-[#1A133E] absolute top-0 left-0 w-full h-full transition-all duration-700 rotate-12 scale-[1.02];
}
</style>