<template>
    <main>
        <AboutHero />
        <SoftwareList />
        <KeySkillsSection />
        <ContactSection />
    </main>
</template>
<script>
export default {
    components: {
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
        AboutHero: () => import("~/components/About/Hero.vue"),
        KeySkillsSection: () => import("~/components/About/KeySkills.vue"),
        SoftwareList: () => import("~/components/About/SoftwareList.vue"),
    },
};
</script>