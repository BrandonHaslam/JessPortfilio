<template>
    <div>
        <HeaderListItemSlot>Key Skills</HeaderListItemSlot>
        <!-- Make 2 then 4 per row -->
        <section class="md:flex flex-wrap justify-evenly my-8">
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
                    "I have experience in designing digital products for clients ranging from small startups to large corporations.",
                icon: "DigitalDesign",
            },
            {
                title: "App Design",
                description:
                    "I have experience in designing native iOS and Android applications for clients ranging from small startups to large corporations.",
                icon: "AppDesign",
            },
            {
                title: "Branding",
                description:
                    "I have experience in designing logos, branding, and packaging for clients ranging from small startups to large corporations.",
                icon: "Branding",
            },
            {
                title: "Web Design",
                description:
                    "I have experience in designing websites for clients ranging from small startups to large corporations.",
                icon: "WebDesign",
            },
        ],
    }),
};
</script>