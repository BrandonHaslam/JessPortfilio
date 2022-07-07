<template>
    <div
        class="
            text-center
            p-8
            my-8
            md:my-8
            basis-4/5
            sm:basis-2/5
            lg:basis-[30%]
            relative
            flex flex-col
            justify-between
        "
    >
        <div
            class="absolute inset-0 opacity-20 rounded-3xl"
            :style="{ background: cardStyles }"
        />
        <section>
            <h3 :style="{ color: cardTitleStyle }">
                {{ data.title }}
            </h3>
            <p class="text-base lg:text-[1.8rem] p-4">{{ data.description }}</p>
        </section>
        <div
            class="h-4 w-4 rounded-full mx-auto mt-4"
            :style="{ background: cardTitleStyle }"
        />
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "DetailsCard",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        cardTitleStyle() {
            return this.$store.state.projectStyles.colorLight;
        },
        cardStyles() {
            return this.$store.state.projectStyles.colorDark;
        },
    },
};
</script>