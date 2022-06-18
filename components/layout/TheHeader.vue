<template>
    <header
        class="
            text-white
            sm:!py-8
            flex
            sm:items-center sm:h-auto
            p-layout
            w-full
            z-50
            transition-colors
            duration-500
            fixed
            top-0
            sm:rounded-bl-full
        "
        :class="{ '!bg-[rgba(9,3,44,0.95)]': scrolled }"
    >
        <section class="mr-auto z-50 flex items-start w-full">
            <NuxtLink to="/" aria-label="Link to Homepage">
                <Logo class="my-8 sm:m-0" />
            </NuxtLink>
            <HamburgerButton
                class="sm:hidden ml-auto"
                @toggleNavigation="NavbarToggle"
                :toggleButton="mobileNavOpen"
            />
        </section>
        <section
            class="
                fixed
                top-0
                duration-700
                h-screen
                w-screen
                flex flex-col
                align-center
                sm:static sm:flex-row sm:h-auto sm:w-auto
                px-[10vw]
                sm:p-0
            "
            :class="
                !this.mobileNavOpen
                    ? '-left-full '
                    : 'left-0 bg-[#050020] sm:bg-inherit'
            "
        >
            <LinkList @closeNav="NavbarToggle" />
            <ContactInfo
                class="
                    sm:hidden
                    invisible
                    transition-visibility
                    duration-500
                    my-12
                "
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
        Logo: () => import("@/assets/images/Logo.svg"),
        LinkList: () => import("@/components/layout/Header/LinkList.vue"),
        ContactInfo: () => import("./Header/ContactInfo.vue"),
    },
    data: () => ({
        mobileNavOpen: false,
        scrolled: false,
    }),
    methods: {
        NavbarToggle() {
            this.mobileNavOpen = !this.mobileNavOpen;
            // this.mobileNavOpen ? this.disableScroll() : this.enableScroll();
        },
        disableScroll() {
            document.body.style.overflow = "hidden";
        },
        enableScroll() {
            document.body.style.overflow = "visible";
        },
        changeCss() {
            window.scrollY > 10
                ? (this.scrolled = true)
                : (this.scrolled = false);
        },
    },
    mounted() {
        window.addEventListener("scroll", this.changeCss, false);
    },
};
</script>