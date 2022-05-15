<template>
    <footer>
        <section
            class="
                flex
                md:flex-row
                flex-col-reverse
                items-center
                justify-center
                align-center
                px-12
                md:px-40
                py-24
            "
        >
            <div class="max-w-full">
                <FooterLinks />
                <h6
                    class="
                        md:mb-4
                        mt-12
                        text-[2rem]
                        font-bold
                        md:text-left
                        text-center
                    "
                >
                    Contact Info:
                </h6>
                <FooterContact />
            </div>
            <MainLogo class="md:ml-auto h-48 w-48 md:h-60 md:w-60" />
        </section>
        <h6 class="text-center mb-4">Developed by Waffle Web</h6>
    </footer>
</template>
<script>
export default {
    components: {
        FooterContact: () => import("./Footer/FooterContact"),
        FooterLinks: () => import("./Footer/FooterLinks"),
        MainLogo: () => import("@/assets/images/CircleLogo.svg"),
    },
};
</script>
<style scoped>
footer {
    background-color: #1a133e;
    border-radius: 82px 82px 0px 0px;
}
</style>