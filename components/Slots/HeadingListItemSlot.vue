<template>
    <h2
        class="
            text-[3.6rem]
            font-bold font-raleway
            text-center
            lg:text-left
            mb-16
        "
    >
        <span class="hidden lg:inline mr-4 text-[#C275FF]">-</span><slot></slot>
    </h2>
</template>
<script>
export default {
    name: "HeaderListItemSlot",
};
</script>