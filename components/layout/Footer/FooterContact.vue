<template>
    <ul class="flex flex-col md:flex-row">
        <!-- Phone  -->
        <li>
            <a
                href="tel:078 5252 0444"
                aria-label="Jessica Burrow's Phone number, click to call"
            >
                <span>
                    <h1><PhoneSvg class="icon" /> Phone Number:</h1>
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
                    <h1><MailSvg class="icon" /> Email Address:</h1>
                    jess_burrow1@yahoo.co.uk
                </span>
            </a>
        </li>
        <!-- Linkedin -->
        <li>
            <span aria-label="Jessica Burrow's location">
                <h1><LinkedInSvg class="icon mb-4" /> Location:</h1>
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
    @apply mr-24 my-4;
}
a,
li {
    @apply flex items-start text-[1.25rem] xs:text-[1.5rem];
}

.icon {
    @apply h-16 w-16 pr-4;
}
</style>