<template>
    <main class="flex flex-col justify-center items-center h-full">
        <h1
            class="
                text-7xl
                sm:text-8xl
                3xl:text-9xl
                text-center
                font-bold
                mb-16
                !leading-tight
            "
        >
            <span class="text-2xl sm:text-3xl font-normal">Hey, Im Jess.</span>
            <br />
            Im A <span>{{ currentWord }}</span> Designer
        </h1>
        <div class="sm:flex mb-16 text-center">
            <NuxtLink class="button-filled" to="/portfolio"
                >View My Portfolio</NuxtLink
            >
            <NuxtLink class="button" to="/about">Read About Me</NuxtLink>
        </div>
    </main>
</template>
 
<script>
export default {
    layout: "index",
    data: () => ({
        words: [
            {
                word: "Graphic",
                colour: "purple",
            },
            {
                word: "Digital",
                colour: "red",
            },
            {
                word: "UI/UX",
                colour: "blue",
            },
            {
                word: "Brand",
                colour: "green",
            },
        ],
    }),
    computed: {
        currentWord() {
            return "Graphic";
        },
    },
    methods: {},
};
</script>
<style scoped>
span:nth-of-type(2) {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmy 3s infinite;
    animation-direction: alternate;
}

@keyframes shimmy {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(20px, 50px);
    }
}
</style>
