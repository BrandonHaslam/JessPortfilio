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
            class="hamburger w-[3rem] !mb-0"
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
    @apply bg-[#C275FF] h-1 my-6 rounded transition-all duration-500 border border-[#C275FF];
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