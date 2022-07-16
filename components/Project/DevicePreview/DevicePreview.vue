<template>
    <div v-if="previewImages" class="flex items-center flex-col">
        <DesktopDevicePreview
            v-if="previewImages.desktop"
            :preview="previewImages.desktop"
            class="hidden lg:block"
        />
        <MobileDevicePreview
            v-if="previewImages.mobile"
            :preview="previewImages.mobile"
            class="lg:hidden"
        />
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
    props: {
        previewImages: {
            type: Object,
            required: false,
        },
        directory: {
            type: String,
            required: true,
        },
    },
};
</script>
