<template>
    <header
        class="
            text-white
            sm:text-inherit
            !py-8
            align-center
            justify-center
            flex
            sm:static sm:flex-row sm:items-center sm:h-auto
            p-layout
            overflow-hidden
        "
    >
        <NuxtLink to="/" aria-label="Link to Homepage" class="mr-auto z-50">
            <Logo class="sm:static h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40" />
        </NuxtLink>
        <HamburgerButton
            class="sm:hidden z-50"
            @toggleNavigation="NavbarToggle"
        />
        <section
            class="
                absolute
                top-0
                transition-all
                duration-1000
                bg-[#050020]
                sm:bg-inherit
                h-screen
                w-screen
                flex flex-col
                align-center
                justify-center
                sm:static sm:flex-row sm:h-auto sm:w-auto
                z-10
                px-[10vw]
                sm:p-0
            "
            :class="!this.mobileNavOpen ? '-left-full' : 'left-0'"
        >
            <LinkList
                class="
                    sm:block
                    text-center
                    invisible
                    sm:visible
                    transition-visibility
                    duration-1000
                    mt-auto
                    sm:pt-0
                "
                :class="{ '!visible': mobileNavOpen }"
            />
            <ContactInfo
                class="invisible transition-visibility duration-1000 my-12"
                :class="{ '!visible': mobileNavOpen }"
            />
        </section>
    </header>
</template>
<script>
export default {
    components: {
        HamburgerButton: () =>
            import("@/components/layout/Header/HamburgerButton.vue"),
        Logo: () => import("@/assets/images/CircleLogo.svg"),
        LinkList: () => import("@/components/layout/Header/LinkList.vue"),
        ContactInfo: () => import("./Header/ContactInfo.vue"),
    },
    data: () => ({
        mobileNavOpen: false,
    }),
    methods: {
        NavbarToggle() {
            this.mobileNavOpen = !this.mobileNavOpen;
        },
    },
};
</script>
// Change Import this import name via https://nuxtjs.org/docs/directory-structure/components/#nested-directories and place in header file