<template>
    <footer :style="{ backgroundColor: footerColour }">
        <section
            class="
                flex
                md:flex-row
                flex-col-reverse
                items-center
                justify-center
                align-center
                px-4
                md:px-20
                lg:px-40
                py-12
                text-center
            "
        >
            <div class="max-w-full">
                <FooterContact />
            </div>
            <MainLogo class="mb-12 md:mb-0 md:ml-auto" />
        </section>
        <h6 class="text-center mb-4">
            <a href="https://waffleweb.co.uk/">Developed by Waffle Web</a>
            <a href="mailto:BHaslam1998@gmail.com"></a>
        </h6>
    </footer>
</template>
<script>
export default {
    components: {
        FooterContact: () => import("./Footer/FooterContact"),
        MainLogo: () => import("@/assets/images/NewLogo.svg"),
    },
    computed: {
        footerColour() {
            if (this.$route.params.project) {
                return this.$store.state.projectStyles.colorDark;
            }
            return "#1a133e";
        },
    },
};
</script>
<style scoped>
footer {
    background-color: #1a133e;
    /* border-radius: 82px 82px 0px 0px; */
}
</style>