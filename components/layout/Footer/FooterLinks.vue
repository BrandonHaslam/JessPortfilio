<template>
    <ul>
        <!-- Internal -->
        <li>
            <NuxtLink to="/portfolio/">Portfolio</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about/">About</NuxtLink>
        </li>
        <li class="!hidden md:!block">
            <span>|</span>
        </li>
        <!-- External -->
        <li>
            <NuxtLink to="/contact/">Contact</NuxtLink>
        </li>
        <li class="!hidden md:!block">
            <a href="https://www.linkedin.com/" class="flex items-center h-16">
                <LinkedInSvg class="h-12" alt="go to linkedin" />
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: "FooterLinkList",
    components: {
        LinkedInSvg: () => import("@/assets/images/linkedin.svg"),
    },
};
</script>
<style scoped>
ul {
    @apply flex max-w-full justify-center md:justify-start items-center content-center mt-12 md:mt-0;
}
a {
    position: relative;
}

li {
    font-weight: 700;
    display: block;
    @apply text-base mx-4 md:mr-20 md:ml-0;
}
</style>
