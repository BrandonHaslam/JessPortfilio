<template>
    <div class="w-4/5 sm:w-3/5 md:w-11/12 lg:w-3/5 mx-4 md:my-8 z-10">
        <component
            :is="link ? 'a' : 'div'"
            class="card"
            :href="link"
            :aria-label="adaLabel"
        >
            <component :is="icon" class="icon inline mb-2" />
            <div>
                <h4>{{ heading }}</h4>
                <span>{{ text }}</span>
            </div>
        </component>
    </div>
</template>
<script>
export default {
    name: "ContactIconCard",
    components: {
        PhoneSvg: () => import("@/assets/images/Phone.svg"),
        MailSvg: () => import("@/assets/images/Mail.svg"),
    },
    props: {
        icon: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        },
        heading: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        adaLabel: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
h4 {
    @apply text-[1.8rem] font-medium;
}
.icon {
    @apply text-primary h-12 w-12 lg:h-16 lg:w-16;
}
.card {
    @apply px-4 py-8 h-full w-full flex flex-col justify-center items-center content-center border-primary bg-[rgba(26,19,62,0.5)] border rounded-2xl text-center my-6 text-base;
}
</style>