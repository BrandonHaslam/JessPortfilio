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
        <div class="w-[28rem] h-[16rem] m-4 z-10">
            <a
                href="tel:078 5252 0444"
                aria-label="Jessica Burrow's phone number, click to call"
            >
                <PhoneSvg class="icon" />
                <h4>Phone Number</h4>
                <span>078 5252 0444</span>
            </a>
        </div>
        <div class="w-[28rem] h-60 m-4 z-10">
            <a
                href="mailto:jess_burrow1@yahoo.co.uk"
                aria-label="Jessica Burrow's email address, click to send an email"
            >
                <MailSvg class="icon" />
                <h4>Email</h4>
                <span>jess_burrow1@yahoo.co.uk</span>
            </a>
        </div>
        <div class="w-[28rem] h-60 m-4 z-10">
            <a aria-label="Jessica Burrow's location">
                <PhoneSvg class="icon" />
                <h4>Location</h4>
                <span>Manchester, England</span>
            </a>
        </div>
        <div
            class="
                absolute
                h-full
                w-2/5
                bg-red-500
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
        PhoneSvg: () => import("@/assets/images/Phone.svg"),
        MailSvg: () => import("@/assets/images/Mail.svg"),
    },
};
</script>
<style scoped>
h4 {
    @apply text-[2rem] font-medium;
}
.icon {
    @apply text-primary h-12 w-12;
}
a {
    @apply h-full w-full flex flex-col justify-center items-center content-center border-primary bg-[rgba(26,19,62,0.5)] border rounded-2xl text-center my-6 text-base;
}
.backgroundShape {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
}
</style>