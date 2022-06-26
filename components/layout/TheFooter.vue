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
                px-4
                md:px-20
                lg:px-40
                py-24
            "
        >
            <div class="max-w-full">
                <FooterLinks />
                <h5 class="md:mb-4 mt-12 text-[2rem] font-bold">
                    Contact Info:
                </h5>
                <FooterContact />
            </div>
            <MainLogo class="md:ml-auto" />
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
        FooterLinks: () => import("./Footer/FooterLinks"),
        MainLogo: () => import("@/assets/images/NewLogo.svg"),
    },
};
</script>
<style scoped>
footer {
    background-color: #1a133e;
    border-radius: 82px 82px 0px 0px;
}
</style>