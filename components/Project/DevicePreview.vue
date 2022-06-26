<template>
    <div class="flex items-center flex-col">
        <h3>preview</h3>
        <div class="desktop hidden sm:block">
            <img
                class="w-full"
                :src="
                    require('~/assets/images/projects/LateremGroup/Desktop/LateremDesktopImage.png')
                "
                alt=""
                srcset=""
            />
        </div>
        <div class="mobile sm:hidden">
            <img
                class="w-full"
                :src="
                    require('~/assets/images/projects/LateremGroup/Mobile/LateremMobileImage.jpg')
                "
                alt=""
                srcset=""
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "DevicePreview",
};
</script>
<style scoped>
.desktop {
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

.mobile {
    aspect-ratio: 9 / 19;
    width: 75%;
    border: 10px solid white;
    border-radius: 15px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
}

.mobile::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>