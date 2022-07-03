<template>
    <section class="flex mb-32 flex-col md:flex-row-reverse mt-12">
        <ContactSideIcons />
        <ContactForm class="mt-12 sm:mt-0" />
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