<template>
    <nav class="sm:block text-center sm:visible sm:pt-0 my-auto">
        <ul
            class="
                flex flex-col
                justify-between
                sm:ml-auto sm:flex-row sm:items-center
                text-[3.75rem]
                sm:text-[1.5rem]
                3xl:text-[1.8rem]
                font-semibold
                list-none
                relative
                text-white
            "
        >
            <!-- Internal -->
            <li>
                <NuxtLink
                    to="/portfolio/"
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
                <span
                    :style="colours"
                    class="colours text-[24px] px-8 hidden sm:block"
                    >|</span
                >
            </li>
            <!-- External -->
            <li>
                <NuxtLink
                    :style="colours"
                    class="navLink__animation"
                    to="/about#contact"
                    @click.native="$emit('closeNav')"
                    >Contact Me</NuxtLink
                >
            </li>
            <li>
                <a
                    :style="colours"
                    href="https://www.linkedin.com/in/jessica-burrow-6798aa1b8/"
                    class="sm:flex sm:items-center h-16 hidden"
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
    computed: {
        colours() {
            if (this.$route.params.project) {
                return `color:${this.$store.state.projectStyles.colorLight}`;
            }
            return "color:#c275ff";
        },
        // contactLink() {
        //     if (this.$route.path == "/portfolio/" || this.$route.path == "/") {
        //         return "/about#contact";
        //     } else {
        //         return `${this.$route.path}#contact`;
        //     }
        // },
    },
};
</script>
<style  scoped>
a {
    @apply sm:px-8 relative;
    letter-spacing: 0.5px;
}

li {
    @apply my-4 sm:m-0 sm:flex whitespace-nowrap;
}
@media screen and (min-width: 768px) {
    .navLink__animation::before {
        position: absolute;
        top: 50%;
        left: -5px;
        color: rgba(255, 255, 255, 0);
        content: "●";
        transition: all 300ms;
    }
    .navLink__animation:hover::before {
        color: rgb(255, 255, 255);
        top: 0%;
        left: -5px;
        transition: all 500ms;
    }
}
</style>
