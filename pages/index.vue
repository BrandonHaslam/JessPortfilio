<template>
    <main class="flex flex-col justify-center items-center h-full">
        <h1
            class="
                text-8xl
                sm:text-9xl
                text-center
                font-bold
                mb-16
                !leading-tight
            "
        >
            <span class="text-2xl sm:text-4xl font-normal">Hey, I'm Jess.</span>
            <br class="my-16" />
            <!-- Infinite scroll -->
            I'm A <span>{{ currentWord }}</span> Designer
        </h1>
        <div class="flex flex-col sm:flex-row justify-center mb-16">
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
<style lang="postcss" scoped>
span:nth-of-type(2) {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmy 3s infinite;
    animation-direction: alternate;
}
.button-filled,
.button {
    text-align: center;
    min-width: 20ch;
    padding: 1.5rem 4.5rem;

    border-radius: 0% 45px 0% 45px;
    transition: all 500ms;
    font-size: 2rem;
    font-weight: 600;
    @apply my-4 sm:mx-8;
}
.button {
    color: #8d34fe;
    border: 2px solid #8d34fe;
}
.button:hover {
    @apply text-white;
}
.button-filled {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
}
.button-filled:hover,
.button:hover {
    box-shadow: 3px 8px 15px rgba(191, 73, 247, 0.5);
    transform: scale(1.1);
    transition: all 500ms;
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
