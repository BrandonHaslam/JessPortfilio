<template>
    <section class="flex mb-32 flex-col md:flex-row">
        <ContactForm />
        <ContactSideIcons />
    </section>
</template>
<script>
export default {
    components: {
        contactForm: () => import("~/components/Contact/ContactForm.vue"),
        contactSideIcons: () =>
            import("~/components/Contact/ContactSideIcons.vue"),
    },
    name: "ContactSection",
};
</script>