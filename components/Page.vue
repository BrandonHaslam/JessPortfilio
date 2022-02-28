<template>
    <div v-editable="blok" class="px-6">
        <component
            v-for="blok in blok.body"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
        />
    </div>
</template>
 
<script>
export default {
    // data: () => ({}),
    props: {
        blok: {
            type: Object,
            required: true,
        },
    },
    computed: {
        storyBlokBackgroundColour() {
            return this.blok.BackgroundColour.color ?? "white";
        },
        storyBlokTextColour() {
            return this.blok.TextColour.color ?? "black";
        },
    },
    watch: {
        // This will not work locally due to the data being static
        blok() {
            this.setColours();
        },
    },
    methods: {
        setColours() {
            let body = document.querySelector("body");
            body.style.background = this.storyBlokBackgroundColour;
            body.style.color = this.storyBlokTextColour;
        },
    },
    mounted() {
        this.setColours();
    },
};
</script>