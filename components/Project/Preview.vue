<template>
    <div class="px-4 lg:px-24">
        <picture>
            <source
                media="(max-width:799px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Mobile/${this.images.mobile}`)
                "
            />
            <source
                media="(min-width:800px)"
                :srcset="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.images.desktop}`)
                "
            />
            <img
                class="w-full h-full object-cover p-8 md:p-8"
                :src="
                    require(`~/assets/images/projects/${this.directory}/Desktop/${this.images.desktop}`)
                "
                alt=""
            />
        </picture>
    </div>
</template>
<script>
export default {
    name: "Preview",
    props: {
        images: {
            type: Object,
        },
        directory: {
            type: String,
        },
    },
};
</script>