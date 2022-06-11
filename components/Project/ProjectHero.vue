<template>
    <Section class="w-full relative overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img
                class="w-full h-full object-cover blur-[2px]"
                :src="
                    require(`~/assets/images/projects/${this.directory}/${this.hero.background.image}`)
                "
                alt=""
                srcset=""
            />
        </div>
        <div
            class="absolute inset-0 flex items-center"
            :style="{ backgroundImage: createBackgroundString }"
        >
            <div class="p-layout !z-10 lg:flex lg:items-center">
                <div class="lg:w-4/5 xl:w-3/5 text-center sm:text-left">
                    <h1 class="font-bold text-[32px] sm:text-[64px] mb-12">
                        {{ hero.title }}
                    </h1>
                    <p
                        v-for="(paragraph, index) in hero.description"
                        :key="'paragraph ' + index"
                        class="text-base md:text-[18px] mb-8"
                    >
                        {{ paragraph }}
                    </p>
                </div>
                <a
                    v-if="this.hero.figma.desktopLink"
                    :style="figmaStyles"
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
                        text-[1.8rem]
                        font-bold
                    "
                    :href="hero.figma.desktopLink"
                    ><FigmaLogo class="inline mr-6" />View Figma</a
                >
                <!-- , , hover:bg-[${this.hero.figma.hoverBackgroundColor}] -->
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
        styles: {
            type: Object,
            required: true,
        },
    },
    computed: {
        createBackgroundString() {
            return `linear-gradient(180deg, ${this.hero.background.colorOne}, ${this.hero.background.colorTwo})`;
        },
        figma() {
            return this.hero.figma;
        },
        figmaStyles() {
            return `color:${this.figma.color}; border:2px solid ${this.figma.color}; background: ${this.figma.bgColor}`;
            // return "text-[blue] hover:text-[green]";
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