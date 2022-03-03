<template>
    <ul class="sm:hidden border-t border-[#C275FF] flex flex-col pt-auto">
        <!-- Linkedin -->
        <li>
            <a
                href="https://www.linkedin.com/"
                aria-label="Jessica Burrow's Linkedin"
            >
                <span class="text-[#C275FF] pr-8"
                    ><LinkedInSvg class="h-16 w-auto"
                /></span>
                jessicaburrow
            </a>
        </li>
        <!-- Phone  -->
        <li>
            <a href="tel:078 5252 0444" aria-label="Jessica Burrow's Linkedin">
                <span class="text-[#C275FF] pr-8"
                    ><LinkedInSvg class="h-16 w-auto"
                /></span>
                078 5252 0444
            </a>
        </li>
        <!-- email -->
        <li>
            <a
                href="mailto:jess_burrow1@yahoo.co.uk"
                aria-label="Jessica Burrow's Linkedin"
            >
                <span class="text-[#C275FF] pr-8"
                    ><LinkedInSvg class="h-16 w-auto"
                /></span>
                jess_burrow1@yahoo.co.uk
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    components: {
        LinkedInSvg: () => import("@/assets/images/linkedin.svg"),
    },
};
// Mobile contact info
// Will have media query on component rather than here, will hide on sm
</script>
<style scoped>
a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    @apply pt-8;
}
span {
    vertical-align: center;
}
</style>