<template>
    <header class="p-layout py-8 flex items-center">
        <NuxtLink class="!p-0" to="/">
            <!-- this needs changing to text -->
            <img
                class="h-10 w-full hidden sm:block"
                src="~/assets/images/JessicaBurrowLong.svg"
                alt=""
            />
            <img
                class="h-10 w-full sm:hidden"
                src="~/assets/images/JessicaBurrow.svg"
                alt=""
            />
        </NuxtLink>
        <LinkList class="ml-auto" />
        <HamburgerButton />
        <!-- Hamburger -->
    </header>
</template>
<script>
export default {
    components: {
        LinkList: () => import("~/components/layout/Header/linkList.vue"),
    },
};
</script>
<style scoped>
header {
    @apply text-[1rem] sm:text-[1.5rem] md:text-[2rem];
    /* font-size: 2rem; */
    font-weight: 600;
}
</style>
// will be hamburger for mobiles
// Add animation to list 
// Change Import this import name via https://nuxtjs.org/docs/directory-structure/components/#nested-directories and place in header file