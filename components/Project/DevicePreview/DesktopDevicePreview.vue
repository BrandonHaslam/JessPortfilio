<template>
    <div class="desktop">
        <img
            class="w-full"
            :src="
                require(`~/assets/images/projects/${$route.params.project}/Desktop/${preview}`)
            "
            alt=""
            srcset=""
        />
    </div>
</template>
<script>
export default {
    name: "DesktopDevicePreview",
    props: {
        preview: {
            type: String,
            required: false,
        },
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