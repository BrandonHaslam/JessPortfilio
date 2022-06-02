<template>
    <div
        class="
            bg-[rgba(26,19,62,1)]
            rounded-3xl
            text-center
            p-8
            my-8
            md:my-8
            basis-4/5
            sm:basis-2/5
            lg:basis-1/5
        "
    >
        <component class="mx-auto" :is="icon" />
        <h3 class="">{{ title }}</h3>
        <p class="text-base">{{ description }}</p>
    </div>
</template>
<script>
export default {
    name: "SkillCard",
    components: {
        DigitalDesign: () =>
            import("@/assets/images/About/SkillCard/DigitalDesign.svg"),
        AppDesign: () =>
            import("@/assets/images/About/SkillCard/AppDesign.svg"),
        Branding: () => import("@/assets/images/About/SkillCard/Branding.svg"),
        WebDesign: () =>
            import("@/assets/images/About/SkillCard/WebDesign.svg"),
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
div {
    /* flex-basis: 50%; */
}
</style>