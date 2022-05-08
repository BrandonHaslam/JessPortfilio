<template>
    <main>
        <h1>about</h1>
        <ContactSection />
    </main>
</template>
<script>
export default {
    components: {
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
    },
};
</script>