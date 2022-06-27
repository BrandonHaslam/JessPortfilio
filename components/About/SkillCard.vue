<template>
    <div class="skillcard">
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
.skillcard {
    background: rgba(26, 19, 62, 0.2);
    border: 1px solid rgba(26, 19, 62, 0.2);
    transition: all 0.4s;
    @apply rounded-3xl
            text-center
            p-8
            my-8
            md:my-8
            basis-4/5
            sm:basis-2/5
            lg:basis-1/5;
}
.skillcard:hover {
    border: 1px solid #c275ff;
    background: rgba(26, 19, 62, 0.5);
    transition: all 0.4s;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}
.skillcard:hover h3 {
    transition: all 0.4s;
    color: white;
}
h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: all 0.4s;
    color: #c275ff;
}
</style>