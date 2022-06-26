<template>
    <div class="flex items-center flex-col">
        <DesktopDevicePreview class="hidden sm:block" />
        <MobileDevicePreview class="sm:hidden" />
    </div>
</template>
<script>
export default {
    name: "DevicePreview",
    components: {
        DesktopDevicePreview: () =>
            import(
                "@/components/Project/DevicePreview/DesktopDevicePreview.vue"
            ),
        MobileDevicePreview: () =>
            import(
                "@/components/Project/DevicePreview/MobileDevicePreview.vue"
            ),
    },
};
</script>
<style scoped>
.desktop {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
    aspect-ratio: 16 / 10;
    width: 50%;
    border: 10px solid white;
    border-radius: 15px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
}

.desktop::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>