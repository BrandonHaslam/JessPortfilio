<template>
    <main>
        <AboutHero />
        <SoftwareList />
        <KeySkillsSection />
        <ExperienceSection />
        <form
            class="w-full md:w-3/5 flex flex-col text-base font-normal"
            name="About"
            method="POST"
            data-netlify="true"
        >
            <h3>Contact Me</h3>
            <p>
                Fill out the form and I’ll get back to you as soon as possible!
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