<template>
    <nav class="sm:block text-center sm:visible sm:pt-0 my-auto">
        <ul
            class="
                flex flex-col
                justify-between
                sm:ml-auto sm:flex-row sm:items-center
                text-[3.75rem]
                sm:text-[1.75rem]
                3xl:text-[2rem]
                font-semibold
                list-none
                relative
                text-white
            "
        >
            <!-- Internal -->
            <li>
                <NuxtLink
                    to="/portfolio"
                    class="navLink__animation"
                    @click.native="$emit('closeNav')"
                >
                    Portfolio</NuxtLink
                >
            </li>
            <li>
                <NuxtLink
                    to="/about"
                    class="navLink__animation"
                    @click.native="$emit('closeNav')"
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
                    @click.native="$emit('closeNav')"
                    >Contact</NuxtLink
                >
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/"
                    class="sm:flex sm:items-center h-16 text-primary hidden"
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
<style  scoped>
a {
    @apply my-8 sm:m-0 sm:px-8 relative;
    letter-spacing: 0.5px;
}
.headerSegregate {
    color: #c275ff;
}
li {
    @apply sm:flex;
}

@media screen and (min-width: 768px) {
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
