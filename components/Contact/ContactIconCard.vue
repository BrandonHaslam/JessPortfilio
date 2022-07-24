<template>
    <div class="w-4/5 sm:w-1/3 lg:w-1/4 xl:w-1/5 mx-4 my-8 z-10 h-1/3 xl:h-1/2">
        <component
            :is="link ? 'a' : 'div'"
            class="card"
            :href="link"
            :aria-label="adaLabel"
        >
            <component :is="icon" class="icon inline mb-2" />
            <div>
                <h4>{{ heading }}</h4>
                <span v-if="text">{{ text }}</span>
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
        LinkedInSvg: () => import("@/assets/images/linkedin.svg"),
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
            required: false,
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