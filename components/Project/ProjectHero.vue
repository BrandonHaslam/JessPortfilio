<template>
    <Section class="w-full relative overflow-hidden">
        <div class="absolute inset-0 z-0">
            <picture>
                <source
                    media="(max-width:799px)"
                    :srcset="
                        require(`~/assets/images/projects/${this.directory}/Mobile/${this.hero.background.image.mobile}`)
                    "
                />
                <source
                    media="(min-width:800px)"
                    :srcset="
                        require(`~/assets/images/projects/${this.directory}/Desktop/${this.hero.background.image.desktop}`)
                    "
                />
                <img
                    class="w-full h-full object-cover blur-[2px]"
                    :src="
                        require(`~/assets/images/projects/${this.directory}/Desktop/${this.hero.background.image.desktop}`)
                    "
                    alt=""
                />
            </picture>
        </div>
        <div
            class="absolute inset-0 flex items-center"
            :style="{ backgroundImage: createBackgroundString }"
        >
            <div class="p-layout !z-10 lg:flex lg:items-center">
                <div class="lg:w-3/5 text-center sm:text-left">
                    <h1 class="font-bold text-[32px] sm:text-[64px] mb-12">
                        {{ hero.title }}
                    </h1>
                    <p
                        v-for="(paragraph, index) in hero.description"
                        :key="'paragraph ' + index"
                        class="text-base lg:text-1.8rem mb-8"
                    >
                        {{ paragraph }}
                    </p>
                </div>
                <a
                    v-if="this.hero.figma.desktopLink"
                    :style="!hovered ? figmaStyles : figmaHoverStyles"
                    @mouseenter="hovered = true"
                    @mouseleave="hovered = false"
                    class="
                        hidden
                        sm:block
                        ml-auto
                        absolute
                        right-0
                        pl-20
                        py-10
                        pr-60
                        rounded-l-full
                        text-base
                        font-bold
                    "
                    :href="hero.figma.desktopLink"
                    ><FigmaLogo class="inline mr-6" />View Figma</a
                >
                <a
                    v-if="this.hero.figma.mobileLink"
                    :style="figmaStyles"
                    class="
                        mx-auto
                        sm:hidden
                        py-10
                        px-20
                        rounded-full
                        text-base
                        font-bold
                        flex
                        justify-center
                    "
                    :href="hero.figma.mobileLink"
                    ><FigmaLogo class="inline mr-6" />View Figma</a
                >
            </div>
        </div>
    </Section>
</template>
<script>
export default {
    name: "ProjectHero",
    components: {
        FigmaLogo: () => import("@/assets/images/projects/FigmaIcon.svg"),
    },
    props: {
        hero: {
            type: Object,
            required: true,
        },
        directory: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        hovered: false,
    }),
    computed: {
        styles() {
            return this.$store.state.projectStyles;
        },
        createBackgroundString() {
            return `linear-gradient(180deg, ${this.hero.background.colorOne}, ${this.hero.background.colorTwo})`;
        },
        figma() {
            return this.hero.figma;
        },
        figmaStyles() {
            return `color:${this.styles.colorLight}; border:2px solid ${this.styles.colorLight}; background: ${this.styles.colorDarkest}`;
            // return "text-[blue] hover:text-[green]";
        },
        figmaHoverStyles() {
            return `color:white; border:2px solid ${this.styles.colorLight}; background: ${this.styles.colorDark}`;
        },
    },
    // mounted() {
    //     console.log(this.figma);
    // },
};
</script>
<style scoped>
section {
    height: 95vh;
}
</style>