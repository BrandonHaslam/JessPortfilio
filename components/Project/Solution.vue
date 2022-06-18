<template>
    <div class="lg:flex">
        <section class="sm:basis-1/2 px-24 flex">
            <div class="m-auto">
                <h2 class="text-[4.2rem] font-bold">The Solution</h2>
                <p
                    v-for="(paragraph, index) in solution.text"
                    :key="`Paragraph ${index}`"
                    class="py-4 text-[1.8rem]"
                >
                    {{ paragraph }}
                </p>
            </div>
        </section>
        <section class="sm:basis-1/2">
            <picture>
                <source
                    media="(max-width:799px)"
                    :srcset="
                        require(`~/assets/images/projects/${this.directory}/Mobile/${this.solution.image.mobile}`)
                    "
                />
                <source
                    media="(min-width:800px)"
                    :srcset="
                        require(`~/assets/images/projects/${this.directory}/Desktop/${this.solution.image.desktop}`)
                    "
                />
                <img
                    class="w-full h-full object-cover"
                    :src="
                        require(`~/assets/images/projects/${this.directory}/Desktop/${this.solution.image.desktop}`)
                    "
                    alt=""
                />
            </picture>
        </section>
    </div>
</template>
<script>
export default {
    name: "Solution",
    props: {
        solution: {
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
<style>
h1 {
    color: rgb(5, 0, 32) rgba(23, 22, 79, 1) rgb(112, 152, 255)
        rgb(50, 124, 220);
}
</style>