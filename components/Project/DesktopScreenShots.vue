<template>
    <div :style="backgroundStyles" class="px-4 lg:px-12">
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
            return {
                background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%))",
            };
        },
    },
};
</script>