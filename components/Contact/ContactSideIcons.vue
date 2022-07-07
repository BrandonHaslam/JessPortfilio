<template>
    <section
        class="
            h-full
            w-full
            md:w-2/5
            flex flex-row
            md:flex-col
            flex-wrap
            justify-center
            content-center
            items-center
            relative
        "
    >
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
        <div
            class="
                hidden
                md:block
                absolute
                h-full
                w-2/5
                z-0
                right-0
                rounded-full
                backgroundShape
            "
        ></div>
    </section>
</template>
<script>
export default {
    name: "ContactSideIcons",
    components: {
        ContactIconCard: () => import("./ContactIconCard.vue"),
    },
};
</script>
<style scoped>
.backgroundShape {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
}
</style>