<template>
    <NuxtLink class="!p-0" to="/">
        <MainLogo />
    </NuxtLink>
</template>
<script>
export default {
    name: "Logo",
    components: {
        MainLogo: () => import("@/assets/images/CircleLogo.svg"),
    },
};
</script>