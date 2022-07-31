<template>
    <div class="mb-8">
        <HeadingListItemSlot>Experience</HeadingListItemSlot>
        <div class="md:flex relative">
            <section class="md:basis-1/2">
                <!-- <Laptop  /> -->
                <img class="sm:scale-80 m-auto sm:sticky sm:top-20  sm:w-1/2" :src="require('~/assets/images/About/ExperienceImage.png')" alt="">
            </section>
            <section class="md:basis-1/2">
                <div>
                    <h3>
                        Web/Graphic Designer 
                        <span>OPOP Media (2021 - Present)</span>
                    </h3>
                    <p>
                        As part of the marketing team, I design websites from concept to completion, ensuring prototypes and final designs are high quality for client presentation. Starting with user flows and wireframes from successful market research, I work in a team or independently following brand guidelines to create stylised assets and content. 
                    <ul class="list-disc">
                        Other duties include:
                        <li>
                          Developing site content and graphics in partnership with copywriters.
                        </li>
                        <li>
                          Presenting high quality prototypes and final designs to clients.
                        </li>
                        <li>
                           Modifying existing websites according to client requirements. 
                        </li>
                        <li>
                    Handling all composition, colour, typography and branding for projects.
                        </li>
                        <li>Creating content for social media and campaigns.</li>
                        <li>Participate in weekly meeting to discuss project solutions and status.</li>
                        <li>Working multiple projects on tight deadlines.</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <h3>
                        Freelance Brand Designer
                        <span>(2019 - 2021)</span>
                    </h3>
                    <p>
                        As a Freelance Brand Design, strengthening my time
                        management and self initiative was essential towards
                        maximising overall project credibility and client
                        communication. I provided clients with full brand
                        packages including logos, web design, product design,
                        social media and advertising content.
                    </p>
                </div>
                <div>
                    <h3>
                        BA Hons Graphic Design <br/> Level 3 BTEC Diploma Art & Design
                    <span
                        >Manchester Metropolitan University (2015 - 2019)</span
                    >
                    </h3>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "ExperienceSection",
    components: {
        HeadingListItemSlot: () =>
            import("~/components/Slots/HeadingListItemSlot.vue"),
        // Laptop: () => import("@/assets/images/About/Laptop.svg"),
    },
};
</script>
<style scoped>
div:not(:last-of-type) {
    margin-bottom: 3rem;
}
h3 {
    color: rgba(194, 117, 255, 1);
    margin-bottom: 1.5rem;
}
h3 span {
    font-weight: 100;
    display: block;
    line-height: 95%;
}
p {
    font-size: 1.6rem;
    font-weight: 400;
}
ul {
    margin-top: 1.5rem;
}
li {
    @apply ml-8;
}
</style>