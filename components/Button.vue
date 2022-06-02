<template>
    <NuxtLink v-if="link" :to="link">
        {{ text }}
    </NuxtLink>
    <button v-else-if="button">
        {{ text }}
    </button>
</template>

<style scoped>
.button-filled,
.button {
    text-align: center;
    min-width: 20ch;
    padding: 1.5rem 4.5rem;
    display: inline-block;
    border-radius: 0% 45px 0% 45px;
    transition: all 500ms;
    font-size: 2rem;
    margin: 1rem;
}
.button {
    border: 2px solid #8d34fe;
}
.button-filled {
    background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%);
}
.button-filled:hover,
.button:hover {
    box-shadow: 2px 5px 10px rgba(191, 73, 247, 0.5);
    transform: scale(1.1);
    transition: all 500ms;
}
</style>