<template>
    <div>
        <HeaderListItemSlot>Key Skills</HeaderListItemSlot>
        <!-- Make 2 then 4 per row -->
        <section class="xs:flex flex-wrap justify-evenly my-8">
            <SkillCard
                v-for="card in cards"
                :key="card.title"
                :icon="card.icon"
                :title="card.title"
                :description="card.description"
            />
        </section>
    </div>
</template>
<script>
export default {
    name: "KeySkillsSection",
    components: {
        HeaderListItemSlot: () =>
            import("~/components/Slots/HeadingListItemSlot.vue"),
        SkillCard: () => import("~/components/About/SkillCard.vue"),
    },
    data: () => ({
        cards: [
            {
                title: "Digital Design",
                description:
                    "Bridging the gap between form and function, I use modern techniques and sollutions to bring ideas to life.",
                icon: "DigitalDesign",
            },
            {
                title: "Branding",
                description:
                    "Working in collaboration with the client, I ensure the visual identity to your business establish strong lasting impressions.",
                icon: "Branding",
            },
            {
                title: "Web Design",
                description:
                    "I design innovative, accessible and attractive websites to ensure your business stands out in the growing market. ",
                icon: "WebDesign",
            },
            {
                title: "App Design",
                description:
                    "By first defiing a clear user journey, encompassing both UI and UX, I create engaging and interactive applications.",
                icon: "AppDesign",
            },
        ],
    }),
};
</script>