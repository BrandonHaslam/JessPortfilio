<template>
    <ul class="flex flex-col md:flex-row">
        <!-- Phone  -->
        <li>
            <a
                href="tel:078 5252 0444"
                aria-label="Jessica Burrow's Phone number, click to call"
            >
                <span>
                    <h3>Phone Number:</h3>
                    078 5252 0444
                </span>
            </a>
        </li>
        <!-- email -->
        <li>
            <a
                href="mailto:jess_burrow1@yahoo.co.uk"
                aria-label="Jessica Burrow's email address, click to send an email"
            >
                <span>
                    <h3>Email Address:</h3>
                    jess_burrow1@yahoo.co.uk
                </span>
            </a>
        </li>
        <li>
            <span aria-label="Jessica Burrow's location">
                <h3>Location:</h3>
                Manchester, England
            </span>
        </li>
    </ul>
</template>
<script>
export default {
    name: "FooterContact",
    components: {
        LinkedInSvg: () => import("@/assets/images/linkedin.svg"),
        PhoneSvg: () => import("@/assets/images/Phone.svg"),
        MailSvg: () => import("@/assets/images/Mail.svg"),
    },
};
</script>
<style scoped>
li {
    @apply md:mr-24 my-4;
}
a,
li {
    @apply text-center md:text-left md:flex md:items-start text-[1.25rem] xs:text-[1.5rem];
}
h3 {
    font-weight: 700;
    @apply text-[1.5rem] xs:text-[1.75rem];
}
</style>