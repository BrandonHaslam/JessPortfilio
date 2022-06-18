<template>
    <div>
        <HeadingListItemSlot>Software</HeadingListItemSlot>
        <section class="flex justify-evenly flex-wrap">
            <SoftwareListItem
                v-for="item in softwareList"
                :key="item.iconName"
                :icon="item.icon"
                :iconName="item.iconName"
                :colour="item.colour"
                :shadow="item.shadow"
            />
        </section>
    </div>
</template>
<script>
export default {
    name: "SoftwareList",
    data: () => ({
        softwareList: [
            {
                icon: "Figma",
                iconName: "Figma",
                colour: "#A259FF",
                shadow: "rgba(173,109,255,0.5)",
            },
            {
                icon: "Photoshop",
                iconName: "Photoshop",
                colour: "rgba(49, 168, 255, 1)",
                shadow: "rgba(49,168,255,0.5)",
            },
            {
                icon: "Illustrator",
                iconName: "Illustrator",
                colour: "rgba(255, 154, 0, 1)",
                shadow: "rgba(255,154,0,0.5)",
            },
            {
                icon: "InDesign",
                iconName: "InDesign",
                colour: "rgba(255, 51, 102, 1)",
                shadow: "rgba(255,51,102,0.5)",
            },
            {
                icon: "SketchUp",
                iconName: "SketchUp",
                colour: "rgba(232, 232, 232, 1)",
                shadow: "rgba(255,255,255,0.5)",
            },
        ],
    }),
    components: {
        HeadingListItemSlot: () =>
            import("~/components/Slots/HeadingListItemSlot.vue"),
        SoftwareListItem: () =>
            import("~/components/About/SoftwareListItem.vue"),
    },
};
</script>