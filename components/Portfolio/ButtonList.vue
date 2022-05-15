<template>
    <div class="w-full overflow-hidden mx-auto">
        <ul>
            <li>
                <button
                    :key="`All button`"
                    :aria-label="`All button`"
                    @click="setCurrentCategory('')"
                    :class="{
                        'bg-[#C275FF] !text-white': activeCategory === '',
                    }"
                >
                    All
                </button>
            </li>
            <li v-for="category in categories" :key="`${category} button`">
                <button
                    :aria-label="`${category} button`"
                    @click="setCurrentCategory(category)"
                    :class="{
                        'bg-[#C275FF] !text-white': category === activeCategory,
                    }"
                >
                    {{ category }}
                </button>
            </li>
        </ul>
    </div>
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
    data: () => ({
        activeCategory: "",
    }),
    methods: {
        setCurrentCategory(category) {
            this.$emit("setCurrentCategory", category);
            this.activeCategory = category;
        },
    },
};
</script>
<style scoped>
ul {
    @apply flex overflow-x-scroll pb-8 pt-8 -mt-8;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
ul::-webkit-scrollbar {
    display: none;
}
button {
    @apply border border-[#C275FF] px-2 xs:px-4 py-2 mx-3 rounded-2xl text-[#C275FF] hover:bg-[#C275FF] hover:text-white 
    font-medium  md:text-[1.5rem] 3xl:text-[1.75rem] min-w-[10ch] whitespace-nowrap;
}
</style>