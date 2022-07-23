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
            <p class="text-base lg:text-[1.8rem] sm:w-[60ch] my-8">
                I'm Jess, an adept and energetic Digital Designer dedicated to
                providing and maintaining accessible, attractive and responsive
                visual design.
            </p>
            <div class="xs:flex xs:justify-center lg:justify-start mb-16">
                <NuxtLink class="button-filled !ml-0" to="/portfolio/"
                    >View My Portfolio</NuxtLink
                >
                <!-- <a
                    class="button"
                    href="'https://drive.google.com/file/d/16-a8kzsYH8DpJ0OwQoRdXxELxbC9KWhN/view?usp=sharing'"
                    >Download CV</a
                > -->
                <a class="button" href="/">Download CV</a>
            </div>
        </section>
        <section class="scale-75 sm:scale-100">
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