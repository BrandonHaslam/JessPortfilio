<template>
    <header
        class="
            py-8
            align-center
            justify-center
            h-screen
            w-screen
            flex flex-col
            absolute
            transition-all
            duration-1000
            sm:static sm:flex-row sm:items-center sm:h-auto
            p-layout
        "
        :class="!this.mobileNavOpen ? '-left-full' : 'left-0'"
    >
        <HamburgerButton
            class="fixed top-[5vw] right-[5vw] sm:hidden"
            @toggleNavigation="NavbarToggle"
        />
        <!-- <HamburgerButton
            class="fixed top-4 right-4 sm:hidden"
            @openNavigation="mobileNavOpen = !mobileNavOpen"
        /> -->
        <Logo class="fixed left-[5vw] top-[5vw] sm:static" />
        <LinkList class="sm:block sm:ml-auto text-center" />
        <ContactInfo />
    </header>
</template>
<script>
export default {
    components: {
        HamburgerButton: () =>
            import("@/components/layout/Header/HamburgerButton.vue"),
        Logo: () => import("./Logo.vue"),
        LinkList: () => import("@/components/layout/Header/LinkList.vue"),
        ContactInfo: () => import("./Header/ContactInfo.vue"),
    },
    data: () => ({
        mobileNavOpen: false,
    }),
    computed: {
        HeaderColour() {
            let bodyColour =
                document.querySelector("body").style.backgroundColor;
            return bodyColour;
        },
    },
    methods: {
        NavbarToggle() {
            this.mobileNavOpen = !this.mobileNavOpen;
            console.log("it pressed", this.mobileNavOpen);
        },
    },
};
// will be hamburger for mobiles
// Pass click event to list
// Add animation to list
// Change Import this import name via https://nuxtjs.org/docs/directory-structure/components/#nested-directories and place in header file
</script>
<style lang="postcss" scoped>
header {
    @apply text-[3rem] sm:text-[1.75rem] md:text-[2rem];
    /* font-size: 2rem; */
    font-weight: 600;
}
</style>