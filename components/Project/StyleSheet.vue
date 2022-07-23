<template>
    <div class="px-4 lg:px-24">
        <picture>
            <source
                media="(max-width:799px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Mobile/${this.stylesheet.Mobile}`)
                "
            />
            <source
                media="(min-width:800px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.stylesheet.Desktop}`)
                "
            />
            <img
                class="w-full h-full object-cover p-8 md:p-8"
                :src="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.stylesheet.Desktop}`)
                "
                alt=""
            />
        </picture>
    </div>
</template>
<script>
export default {
    name: "StyleSheetImage",
    props: {
        stylesheet: {
            type: Object,
            required: true,
        },
    },
    computed: {
        directory() {
            return this.$route.params.project;
        },
    },
};
</script>