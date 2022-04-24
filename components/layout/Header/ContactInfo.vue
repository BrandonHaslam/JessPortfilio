<template>
    <ul class="sm:hidden border-t border-[#C275FF] pt-auto overflow-hidden">
        <!-- Linkedin -->
        <li>
            <a
                href="https://www.linkedin.com/in/jessica-burrow-6798aa1b8/"
                aria-label="Jessica Burrow's Linkedin"
            >
                <span class="iconContainer"><LinkedInSvg class="icon" /></span>
                jessicaburrow
            </a>
        </li>
        <!-- Phone  -->
        <li>
            <a href="tel:078 5252 0444" aria-label="Jessica Burrow's Linkedin">
                <span class="iconContainer"><PhoneSvg class="icon" /></span>
                078 5252 0444
            </a>
        </li>
        <!-- email -->
        <li>
            <a
                href="mailto:jess_burrow1@yahoo.co.uk"
                aria-label="Jessica Burrow's Linkedin"
            >
                <span class="iconContainer break-words"
                    ><MailSvg class="icon"
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
        PhoneSvg: () => import("@/assets/images/Phone.svg"),
        MailSvg: () => import("@/assets/images/Mail.svg"),
    },
};
</script>
<style lang="postcss" scoped>
a {
    @apply pt-8 flex items-center text-[1.25rem] xs:text-[1.5rem];
}
span {
    vertical-align: center;
}
.icon {
    @apply h-14 w-14;
}
.iconContainer {
    @apply text-[#C275FF] pr-8 max-w-full;
}
</style>