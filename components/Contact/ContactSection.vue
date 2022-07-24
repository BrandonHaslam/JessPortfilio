<template>
    <ContactSideIcons />
    <!-- <ContactForm :name="name" class="mt-12 sm:mt-0" /> -->
</template>
<script>
export default {
    components: {
        // contactForm: () => import("~/components/Contact/ContactForm.vue"),
        contactSideIcons: () =>
            import("~/components/Contact/ContactSideIcons.vue"),
    },
    name: "ContactSection",
};
</script>