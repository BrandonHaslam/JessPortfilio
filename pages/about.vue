<template>
    <main>
        <AboutHero />
        <SoftwareList />
        <KeySkillsSection />
        <ExperienceSection />
        <section class="flex mb-32 flex-col md:flex-row-reverse mt-12">
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
            <form
                class="
                    w-full
                    md:w-3/5
                    flex flex-col
                    text-base
                    font-normal
                    mt-12
                    sm:mt-0
                "
                name="Contact"
                method="POST"
                data-netlify="true"
            >
                <h3>Contact Me</h3>
                <p>
                    Fill out the form and I'll get back to you as soon as
                    possible!
                </p>
                <label>Full Name*</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                />
                <label>Email Address </label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                />

                <label>Contact number </label>
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your contact number"
                />

                <label>Message*</label>
                <textarea
                    name="message"
                    required
                    placeholder="Your message here"
                ></textarea>
                <div class="w-full flex justify-center">
                    <button class="button-filled !w-[40rem]" type="submit">
                        Send Message <MailSvg class="h-10 w-10 ml-4 inline" />
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>
<script>
export default {
    components: {
        AboutHero: () => import("~/components/About/Hero.vue"),
        SoftwareList: () => import("~/components/About/SoftwareList.vue"),
        KeySkillsSection: () => import("~/components/About/KeySkills.vue"),
        ExperienceSection: () => import("~/components/About/Experience.vue"),
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
    },
};
</script>
<style scoped>
.backgroundShape {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
}
h3 {
    @apply text-[4.8rem] font-bold;
}
p {
    @apply text-base mb-12;
}
input {
    @apply h-12 py-8;
}
textarea {
    @apply pt-4 h-80;
}
input,
textarea {
    @apply bg-[#1A133E] rounded-lg px-4 mb-6;
}
label {
    @apply text-base font-medium;
}
</style>