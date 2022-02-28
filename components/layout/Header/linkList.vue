<template>
    <nav>
        <ul class="flex flex-col sm:ml-auto sm:flex-row sm:items-center">
            <!-- Internal -->
            <NuxtLink to="/portfolio" class="navLink__animation"
                >Portfolio</NuxtLink
            >
            <NuxtLink to="/about" class="navLink__animation">About</NuxtLink>

            <span class="headerSegregate px-8">|</span>

            <!-- External -->
            <NuxtLink class="headerSegregate navLink__animation" to="/contact"
                >Contact</NuxtLink
            >
            <a href="https://www.linkedin.com/">
                <!-- <img class="h-16" src="~/assets/images/linkedin.svg" /> -->
                <DynamicFillSvg class="h-16" fillColour="#c275ff" />
            </a>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "HeaderLinkList",
    components: {
        DynamicFillSvg: () => import("./HeaderSVG/DynamicFillSvg.vue"),
    },
};
</script>
<style lang="postcss" scoped>
a {
    @apply px-6 sm:px-8 relative;
    letter-spacing: 0.5px;
}
.navLink__animation::before {
    position: absolute;
    top: 50%;
    left: -5px;
    opacity: 0;
    content: "●";
    transition: all 300ms;
}
.navLink__animation:hover::before {
    opacity: 100%;
    top: 0%;
    left: -5px;
    transition: all 500ms;
}
/* .linkedinLogo {
    filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)
        brightness(119%) contrast(119%);
} */
.headerSegregate {
    color: #c275ff;
}
span.headerSegregate {
    font-size: 24px;
}
</style>
// accessibility