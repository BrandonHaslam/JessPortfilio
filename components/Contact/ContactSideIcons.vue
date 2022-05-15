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
            md:justify-between
            content-center
            items-center
        "
    >
        <div class="w-[28rem] h-60 lg:w-[30rem] lg:h-64 m-4">
            <a
                href="tel:078 5252 0444"
                aria-label="Jessica Burrow's phone number, click to call"
            >
                <PhoneSvg class="icon" />
                <h4>Phone Number</h4>
                <span>078 5252 0444</span>
            </a>
        </div>
        <div class="w-[28rem] h-60 lg:w-[30rem] lg:h-64 m-4">
            <a
                href="mailto:jess_burrow1@yahoo.co.uk"
                aria-label="Jessica Burrow's email address, click to send an email"
            >
                <MailSvg class="icon" />
                <h4>Email</h4>
                <span>jess_burrow1@yahoo.co.uk</span>
            </a>
        </div>
        <div class="w-[28rem] h-60 lg:w-[30rem] lg:h-64 m-4">
            <a aria-label="Jessica Burrow's location">
                <PhoneSvg class="icon" />
                <h4>Location</h4>
                <span>Manchester, England</span>
            </a>
        </div>
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
    @apply text-[2rem] font-bold;
}
.icon {
    @apply text-[#C172FF] h-12 w-12;
}
a {
    @apply h-full w-full flex flex-col justify-center items-center content-center border-[#C172FF] bg-[#1A133E] border-2 rounded-2xl text-center my-6 text-[1.8rem];
}
</style>