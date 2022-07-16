<template>
    <button @click="openNavigation" aria-label="Navigation Toggle">
        <div
            class="w-[1.5rem]"
            :class="{ 'top-animate': navigationOpenAnimation }"
            :style="{
                backgroundColor: hamburgerColour,
                borderColor: hamburgerColour,
            }"
        />
        <div
            class="w-[4.5rem]"
            :class="{ 'middle-animate': navigationOpenAnimation }"
            :style="{
                backgroundColor: hamburgerColour,
                borderColor: hamburgerColour,
            }"
        />
        <div
            class="w-[3rem] !mb-0"
            :class="{ 'bottom-animate': navigationOpenAnimation }"
            :style="{
                backgroundColor: hamburgerColour,
                borderColor: hamburgerColour,
            }"
        />
    </button>
</template>
<script>
export default {
    name: "HamburgerButton",

    props: {
        toggleButton: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    computed: {
        navigationOpenAnimation() {
            return this.toggleButton ?? false;
        },
        hamburgerColour() {
            if (this.$route?.params?.project) {
                return this.$store.state.projectStyles.colorLight;
            }
            return "#C275FF";
        },
    },
    methods: {
        openNavigation() {
            this.$emit("toggleNavigation");
            // this.navigationOpenAnimation = !this.navigationOpenAnimation;
        },
    },
};
</script>

<style lang="postcss" scoped>
div {
    @apply h-1 my-6 rounded transition-all duration-500 border;
}
.top-animate {
    @apply translate-x-[0.5rem] translate-y-[0.75rem] rotate-45;
}
.middle-animate {
    @apply -rotate-45;
}
.bottom-animate {
    @apply translate-x-[1.25rem] translate-y-[-1.25rem] rotate-45;
}
</style>