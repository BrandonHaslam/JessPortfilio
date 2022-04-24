<template>
    <header
        class="
            text-white
            !py-4
            sm:!py-8
            flex
            sm:items-center sm:h-auto
            p-layout
            fixed
            top-0
            w-full
            z-50
            transition-colors
            duration-500
        "
        :class="{ 'bg-[#09032C]': scrolled }"
    >
        <section class="mr-auto z-50 flex items-start w-full">
            <NuxtLink to="/" aria-label="Link to Homepage">
                <Logo
                    class="sm:static h-24 w-24 sm:h-36 sm:w-36 md:h-40 md:w-40"
                />
            </NuxtLink>
            <HamburgerButton
                class="sm:hidden ml-auto"
                @toggleNavigation="NavbarToggle"
            />
        </section>
        <section
            class="
                absolute
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
            :class="!this.mobileNavOpen ? '-left-full ' : 'left-0 bg-[#050020]'"
        >
            <LinkList />
            <ContactInfo
                class="invisible transition-visibility duration-500 my-12"
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
        scrolled: false,
    }),
    methods: {
        NavbarToggle() {
            this.mobileNavOpen = !this.mobileNavOpen;
            this.mobileNavOpen ? this.disableScroll() : this.enableScroll();
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