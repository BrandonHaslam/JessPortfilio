<template>
    <section class="flex flex-col justify-center items-center p-2">
        <component
            :is="icon"
            class="m-2 scale-85 test"
            :id="iconName"
            :style="{ dropShadow: shadowString }"
        />
        <!-- <img
            class="!block"
            :src="require(`@/assets/images/About/Figma.svg`)"
            alt=""
        /> -->
        <h3 class="my-4 text-center" :style="`color:${colour}`">
            {{ iconName }}
        </h3>
    </section>
</template>
<script>
export default {
    name: "SoftwareListItem",
    props: {
        shadow: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        colour: {
            type: String,
            required: true,
        },
    },
    components: {
        Figma: () => import("@/assets/images/About/Software/Figma.svg"),
        Illustrator: () =>
            import("@/assets/images/About/Software/Illustrator.svg"),
        InDesign: () => import("@/assets/images/About/Software/InDesign.svg"),
        Photoshop: () => import("@/assets/images/About/Software/Photoshop.svg"),
        SketchUp: () => import("@/assets/images/About/Software/SketchUp.svg"),
    },
    computed: {
        shadowString() {
            return `0 4px 3px ${this.shadow}`;
        },
    },
    updated() {
        console.log();
        const icon = this.$el.querySelector("svg");
        icon.style.setProperty(
            "-webkit-filter",
            `drop-shadow(${this.shadowString})`
        );

        console.log(icon);
    },
};
</script>