<template>
    <div class="relative z-10 overflow-hidden">
        <div :style="{ background: backgroundStyles }" class="screenshots" />
        <picture>
            <source
                media="(max-width:799px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Mobile/${this.screenShots.mobile}`)
                "
            />
            <source
                media="(min-width:800px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.screenShots.desktop}`)
                "
            />
            <img
                class="w-full h-full object-cover"
                :src="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.screenShots.desktop}`)
                "
                alt=""
            />
        </picture>
    </div>
</template>
<script>
export default {
    name: "MobileScreenShots",
    props: {
        screenShots: {
            type: Object,
            required: true,
        },
    },
    computed: {
        directory() {
            return this.$route.params.project;
        },
        backgroundStyles() {
            if (this.$route.params.project) {
                return `linear-gradient(282.06deg, ${this.$store.state.projectStyles.colorDarkest} 0%, ${this.$store.state.projectStyles.colorDark} 100.63%)`;
            }
            return "#1a133e";
        },
    },
};
</script>
<style scoped>
.screenshots {
    z-index: -1;
    top: 25%;
    left: 20%;
    height: 50%;
    width: 85%;
    transform: rotate(-15deg);
    position: absolute;
    margin: 5rem 0;
    border-radius: 10vw;
}
</style>