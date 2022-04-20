<template>
    <section>
        <ul class="flex flex-wrap w-full text-center justify-center">
            <li
                v-for="project in projects"
                :key="project.name"
                class="
                    h-48
                    w-64
                    sm:w-[40rem] sm:h-[40rem]
                    m-8
                    border
                    bg-red-800
                    rounded-3xl
                "
            >
                <a :href="`portfolio/${project.link}`">
                    <div class="w-full h-full card">
                        <h1>{{ project.category }}</h1>
                        <!-- <picture> netlify image </picture> -->
                    </div>
                    {{ project.name }}
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "ProjectList",
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>