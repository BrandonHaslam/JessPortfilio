<template>
    <a
        :href="`portfolio/${project.directory}`"
        class="text-left text-[#3D307B]"
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
                        require(`~/assets/images/projects/${project.directory}/Card.png`)
                    "
                    alt=""
                />
            </div>
        </div>
        <div class="px-16 sm:px-24 w-full mb-20">
            <h2 class="text-[2.4rem] mt-4">
                {{ project.title }}
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
        Arrow: () => import("@/assets/images/Arrow.svg"),
    },
    computed: {
        image() {
            return this.project?.cardImage
                ? this.project.cardImage
                : "Placeholder";
        },
    },
    mounted() {
        // addbackgroundimage
        this.$el.querySelector(
            ".cardBackground"
        ).style.backgroundImage = `url(${require(`~/assets/images/projects/${this.project.directory}/CardBackground.png`)})`;
    },
};
</script>
<style scoped>
.card {
    opacity: 0.7;
    transition: all 0.75s;
    z-index: 10;
}
.card:hover {
    transition: all 0.75s;
    opacity: 1;
}
.card:hover:before {
    transform: scale(1.05) rotate(0deg);
    transition: all 0.75s;
    opacity: 1;
    @apply border-[#C275FF];
}
.card:before {
    content: "";
    @apply -z-10 rounded-3xl border-2 border-[#1A133E] absolute top-0 left-0 w-full h-full transition-all duration-700 rotate-12 scale-[1.02];
}
</style>