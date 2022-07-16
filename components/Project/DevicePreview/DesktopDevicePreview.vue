<template>
    <div class="container mt-8">
        <div class="desktop bg-white">
            <div class="w-full h-full border border-black overflow-y-scroll">
                <img
                    class="w-full"
                    :src="
                        require(`~/assets/images/projects/${$route.params.project}/Desktop/${preview}`)
                    "
                    alt="Desktop preview of project"
                />
            </div>
        </div>
        <div class="bottom hidden lg:block" :style="{ background: macColour }">
            <div class="stand" :style="{ background: standColour }" />
            <div class="foot" :style="{ background: footColour }" />
        </div>
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
    computed: {
        macColour() {
            return this.$store.state.projectStyles.colorLight;
        },
        standColour() {
            return `linear-gradient(180deg, ${this.$store.state.projectStyles.colorDark}, ${this.$store.state.projectStyles.colorLight}, ${this.$store.state.projectStyles.colorLight}, ${this.$store.state.projectStyles.colorLightest}, ${this.$store.state.projectStyles.colorLightest})`;
        },
        footColour() {
            return this.$store.state.projectStyles.colorLight;
        },
    },
};
</script>
<style scoped>
.container {
    width: 50%;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.25), 0px 0px 2px black;
    border-radius: 15px;
    position: relative;
    z-index: 10;
    margin-bottom: 15vh;
}
.desktop {
    border-radius: 15px 15px 0 0;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
    aspect-ratio: 16 / 9;
    border: 1vw solid white;
    overflow-y: hidden;
    /* -ms-overflow-style: none; IE and Edge */
    /* scrollbar-width: 2px; */
    z-index: 10;
    position: relative;
}

.stand {
    width: 25%;
    /* height: 125px; */
    aspect-ratio: 2 / 1;
    position: absolute;
    bottom: -100%;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15), 0px 0px 2px black;
    transform: translate(150%, 0%);
    z-index: -1;
    /* position: relative; */
}
.foot {
    width: 30%;
    /* height: 17.5px; */
    aspect-ratio: 16 / 1;
    background: black;
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translate(-50%, 10%);
    z-index: -1;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15), 0px 0px 2px black;
    /* position: relative; */
    border-radius: 7.5px 7.5px 0 0;
}
.bottom {
    width: 100%;
    aspect-ratio: 9 / 1;
    background: rgb(183, 183, 254);
    border-radius: 0 0 15px 15px;
    position: relative;
}
/* 
.desktop::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
/* } */
</style> 