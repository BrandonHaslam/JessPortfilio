<template>
    <section class="flex flex-col justify-center items-center p-2">
        <component :is="icon" class="m-2 scale-85 test" :id="iconName" />
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
    // mounted() {
    //     const icon = this.$el.querySelector("img");
    //     // icon.style.fill = this.colour;
    //     icon.style.boxShadow = `0 7px 5px ${this.shadow}`;
    //     console.log(icon);
    // },
};
</script>