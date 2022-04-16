<template>
    <NuxtLink class="!p-0" to="/">
        <!-- this needs changing to text -->
        <!-- <img class="h-40 w-full" src="@/assets/images/CircleLogo.svg" alt="" /> -->
        <div class="h-40 w-40">
            <MainLogo />
        </div>
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