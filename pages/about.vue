<template>
    <main>
        <AboutHero />
        <SoftwareList />
        <KeySkillsSection />
        <ExperienceSection />
        <ContactSection />
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