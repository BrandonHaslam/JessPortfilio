<template>
    <ul>
        <li>
            <button
                :key="`All button`"
                :aria-label="`All button`"
                @click="setCurrentCategory('')"
            >
                All
            </button>
            <button
                v-for="category in categories"
                :key="`${category} button`"
                :aria-label="`${category} button`"
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
button {
    @apply border border-[#C275FF]
                    px-4
                    py-2
                    mx-3
                    rounded-2xl
                    text-[#C275FF]
                    hover:bg-[#C275FF] hover:text-white
                    font-medium
                    sm:text-[1.75rem] min-w-[8rem];
}
</style>