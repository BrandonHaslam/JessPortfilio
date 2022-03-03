<template>
    <button @click="openNavigation" aria-label="Navigation Toggle">
        <div
            class="hamburger w-[1.5rem]"
            :class="{ 'top-animate': navigationOpenAnimation }"
        />
        <div
            class="hamburger w-[4.5rem]"
            :class="{ 'middle-animate': navigationOpenAnimation }"
        />
        <div
            class="hamburger w-[3rem]"
            :class="{ 'bottom-animate': navigationOpenAnimation }"
        />
    </button>
</template>
<script>
export default {
    name: "HamburgerButton",

    data: () => ({
        navigationOpenAnimation: false,
    }),

    methods: {
        openNavigation() {
            this.$emit("toggleNavigation");
            this.navigationOpenAnimation = !this.navigationOpenAnimation;
        },
    },
};
</script>

<style lang="postcss" scoped>
.hamburger {
    @apply bg-[#C275FF] h-2 my-6 rounded transition-all duration-500;
}
.top-animate {
    transform: translate(0.5rem, 1rem) rotate(45deg);
}
.middle-animate {
    transform: rotate(-45deg);
}
.bottom-animate {
    transform: translate(1.25rem, -1.5rem) rotate(45deg);
}
</style>