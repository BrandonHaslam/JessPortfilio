<template>
    <header
        class="
            py-8
            px-[7.5vw]
            align-center
            justify-center
            flex
            sm:static sm:flex-row sm:items-center sm:h-auto sm:p-layout
        "
    >
        <Logo class="mr-auto sm:static z-50" />
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
                h-screen
                w-screen
                flex flex-col
                align-center
                justify-center
                sm:static sm:flex-row sm:h-auto sm:w-auto
                z-10
                px-[7.5vw]
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
                    transition-all
                    duration-500
                    mt-auto
                    sm:pt-0
                "
                :class="{ '!visible': mobileNavOpen }"
            />
            <ContactInfo
                class="invisible transition-all duration-500 my-12"
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
        Logo: () => import("./Logo.vue"),
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