<template>
    <section class="mt-8 sm:mt-16 md:mt-32 mb-32" id="contact">
        <h2 class="text-[3.6rem] font-bold font-raleway text-center">
            Get In Touch!
        </h2>
        <section
            class="
                h-full
                w-full
                flex flex-col
                sm:flex-row
                flex-wrap
                justify-center
                content-center
                items-center
                relative
            "
        >
            <div
                class="
                    hidden
                    md:block
                    absolute
                    h-full
                    left-12
                    rounded-full
                    backgroundShape
                "
            ></div>
            <ContactIconCard
                icon="PhoneSvg"
                link="tel:078 5252 0444"
                heading="Phone Number"
                text="078 5252 0444"
                ada-label="Jessica Burrow's phone number, click to call"
            />
            <ContactIconCard
                icon="MailSvg"
                link="mailto:jess_burrow1@yahoo.co.uk"
                heading="Email Address"
                text="jess_burrow1@yahoo.co.uk"
                ada-label="Jessica Burrow's email address, click to send an email"
            />
            <ContactIconCard
                icon="PhoneSvg"
                link=""
                heading="Location"
                text="Manchester, England"
                ada-label="Jessica Burrow's location"
            />
            <ContactIconCard
                icon="LinkedInSvg"
                link="https://www.linkedin.com/in/jessica-burrow-6798aa1b8/"
                text="See my LinkedIn"
                heading="LinkedIn"
                ada-label="Link to Jessica Burrow's LinkedIn"
            />
        </section>
    </section>
</template>
<script>
export default {
    name: "ContactSideIcons",
    components: {
        ContactIconCard: () => import("./ContactIconCard.vue"),
        HeadingListItemSlot: () =>
            import("~/components/Slots/HeadingListItemSlot.vue"),
    },
};
</script>
<style scoped>
.backgroundShape {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
    width: 10%;
}
</style>