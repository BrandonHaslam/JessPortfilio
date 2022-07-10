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
