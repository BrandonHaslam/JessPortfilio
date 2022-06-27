<template>
    <div class="flex flex-col-reverse lg:flex-row justify-around items-center">
        <section class="max-w-full text-center lg:text-left">
            <h1
                class="
                    text-7xl
                    sm:text-8xl
                    3xl:text-9xl
                    font-bold
                    !leading-tight
                "
            >
                Nice To Meet You!
            </h1>
            <p class="text-[1.8rem] sm:w-[60ch] my-8">
                I'm Jess, an adept and energetic Digital Designer dedicated to
                providing and maintaining accessible, attractive and responsive
                visual design.
            </p>
            <div
                class="
                    sm:flex sm:justify-center
                    lg:justify-start
                    mb-16
                    text-center
                "
            >
                <NuxtLink class="button-filled !ml-0" to="/portfolio"
                    >View My Portfolio</NuxtLink
                >
                <NuxtLink class="button" to="/about">Download CV</NuxtLink>
            </div>
        </section>
        <section>
            <img
                class="!block"
                :src="require(`~/assets/images/about2.jpg`)"
                alt=""
            />
        </section>
    </div>
</template>
<script>
export default {
    name: "AboutHero",
};
</script>