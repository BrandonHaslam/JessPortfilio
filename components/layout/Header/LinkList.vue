<template>
    <nav>
        <ul
            class="
                flex flex-col
                sm:ml-auto sm:flex-row sm:items-center
                text-[3.75rem]
                sm:text-[1.75rem]
                md:text-[2rem]
                font-semibold
                list-none
            "
        >
            <!-- Internal -->
            <li>
                <NuxtLink to="/portfolio" class="navLink__animation"
                    >Portfolio</NuxtLink
                >
            </li>
            <li>
                <NuxtLink to="/about" class="navLink__animation"
                    >About</NuxtLink
                >
            </li>
            <li>
                <span class="headerSegregate text-[24px] px-8 hidden sm:block"
                    >|</span
                >
            </li>
            <!-- External -->
            <li>
                <NuxtLink
                    class="headerSegregate navLink__animation"
                    to="/contact"
                    >Contact</NuxtLink
                >
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/"
                    class="sm:flex sm:items-center h-16 text-[#C275FF] hidden"
                >
                    <LinkedInSvg class="h-16" alt="go to linkedin" />
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "HeaderLinkList",
    components: {
        LinkedInSvg: () => import("@/assets/images/linkedin.svg"),
    },
};
// accessibility
</script>
<style lang="postcss" scoped>
a {
    @apply my-8 sm:m-0 sm:px-8 relative;
    letter-spacing: 0.5px;
}
.headerSegregate {
    color: #c275ff;
}
@media screen(sm) {
    .navLink__animation::before {
        position: absolute;
        top: 50%;
        left: -5px;
        opacity: 0;
        color: white;
        content: "●";
        transition: all 300ms;
    }
    .navLink__animation:hover::before {
        opacity: 100%;
        top: 0%;
        left: -5px;
        transition: all 500ms;
    }
}
</style>
