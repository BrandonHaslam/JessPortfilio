<template>
    <main>
        <div class="flex justify-around items-center">
            <section>
                <h1
                    class="
                        text-7xl
                        sm:text-8xl
                        3xl:text-9xl
                        text-left
                        font-bold
                        !leading-tight
                    "
                >
                    Nice To Meet You!
                </h1>
                <p class="text-[1.8rem] w-[60ch] my-8">
                    I'm Jess, an adept and energetic Digital Designer dedicated
                    to providing and maintaining accessible, attractive and
                    responsive visual design.
                </p>
                <div
                    class="
                        flex flex-col
                        sm:flex-row
                        justify-center
                        sm:justify-start
                        mb-16
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

        <ContactSection />
    </main>
</template>
<script>
export default {
    components: {
        ContactSection: () => import("~/components/Contact/ContactSection.vue"),
    },
};
</script>