<template>
    <div
        :style="{ background: backgroundStyles }"
        class="px-4 lg:px-24 screenshots"
    >
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
                class="w-full lg:w-4/5 mx-auto object-cover"
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
    name: "DesktopScreenShots",
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
                return `linear-gradient(282.06deg, ${this.$store.state.projectStyles.colorDark} 0%, ${this.$store.state.projectStyles.colorDarkest} 100.63%)`;
            }
            return "black";
        },
    },
};
</script>
<style scoped>
.screenshots {
    margin: 5rem 0;
    border-radius: 25% 0 25% 0;
}
</style>