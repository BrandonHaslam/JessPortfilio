<template>
    <ul>
        <li>
            <button
                :key="`All button`"
                :aria-label="`All button`"
                class="ProjectButton"
                @click="setCurrentCategory('')"
            >
                All
            </button>
            <button
                v-for="category in categories"
                :key="`${category} button`"
                :aria-label="`${category} button`"
                class="ProjectButton"
                @click="setCurrentCategory(category)"
            >
                {{ category }}
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    name: "ProjectButtonList",
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    methods: {
        setCurrentCategory(category) {
            this.$emit("setCurrentCategory", category);
        },
    },
};
</script>
<style scoped>
.ProjectButton {
    @apply border border-[#C275FF]
                    p-4
                    mx-2
                    rounded-2xl
                    text-[#C275FF]
                    hover:bg-[#C275FF] hover:text-white
                    font-medium
                    sm:text-[1.75rem];
}
</style>