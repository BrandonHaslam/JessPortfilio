<template>
    <main>
        <ContactSection :name="contact" />
    </main>
</template>
<script>
export default {
    components: {
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
    },
};
</script>