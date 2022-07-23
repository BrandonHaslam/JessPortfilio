<template>
    <main
        class="
            flex flex-col
            justify-center
            sm:items-center
            h-full
            relative
            sm:overflow-hidden
        "
    >
        <h1
            class="
                text-7xl
                sm:text-8xl
                3xl:text-9xl
                text-center
                font-bold
                mb-16
                !leading-tight
            "
        >
            <span class="text-2xl sm:text-3xl font-normal"
                >Welcome to my portfolio</span
            >
            <br />
            I'm a
            <span class="container">
                <span
                    class="animated"
                    :style="{ backgroundImage: createBackgroundString }"
                    >{{ currentWord }}</span
                >
            </span>
            Designer
        </h1>
        <div class="xs:flex mb-16 text-center xs:justify-center">
            <NuxtLink class="button-filled" to="/portfolio"
                >View My Portfolio</NuxtLink
            >
            <NuxtLink class="button" to="/about">Read About Me</NuxtLink>
        </div>
        <form class="hidden" name="Contact" method="POST" data-netlify="true">
            <h3>Contact Me</h3>
            <p>
                Fill out the form and I'll get back to you as soon as possible!
            </p>
            <label>Full Name*</label>
            <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
            />
            <label>Email Address </label>
            <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
            />

            <label>Contact number </label>
            <input
                type="tel"
                name="phone"
                required
                placeholder="Your contact number"
            />

            <label>Message*</label>
            <textarea
                name="message"
                required
                placeholder="Your message here"
            ></textarea>
            <div>
                <button type="submit">
                    Send Message <MailSvg class="h-10 w-10 ml-4 inline" />
                </button>
            </div>
        </form>
        <!-- <div class="blob" />
        <div class="blob-2" /> -->
        <!-- <div class="blob-3" />
        <div class="blob-4" /> -->
    </main>
</template>
 
<script>
export default {
    layout: "index",
    components: {
        MailSvg: () => import("@/assets/images/Mail.svg"),
        ContactIconCard: () =>
            import("~/components/Contact/ContactIconCard.vue"),
    },
    data: () => ({
        words: [
            {
                word: "Graphic",
                colour: ["rgb(193, 114, 255)", "rgb(141, 52, 254)"],
            },
            {
                word: "Digital",
                // colour: "red",
                colour: ["rgba(31, 161, 255, 1)", "rgba(55, 99, 255, 1)"],
            },
            {
                word: "UI/UX",
                // colour: "blue",
                colour: ["rgba(32, 255, 175, 1)", "rgba(0, 199, 187, 1)"],
            },
            {
                word: "Brand",
                // colour: "green",
                colour: ["rgba(241, 114, 114, 1)", "rgba(255, 183, 74, 1)"],
            },
        ],
        index: 0,
    }),
    computed: {
        currentWord() {
            return this.words[this.index].word;
        },
        createBackgroundString() {
            return `linear-gradient(270deg, ${
                this.words[this.index].colour[0]
            }, ${this.words[this.index].colour[1]})`;
        },
    },
    methods: {
        changeCurrentWord() {
            setInterval(() => {
                if (this.index === this.words.length - 1) {
                    this.index = 0;
                } else {
                    this.index++;
                }
                // this.index === this.words.length
                //     ? (this.index = 0)
                //     : this.index++;
            }, 2000);
        },
    },
    mounted() {
        this.changeCurrentWord();
    },
};
</script>
<style scoped>
@media screen and (min-width: 640px) {
    .blob {
        animation: shimmy 4s infinite;
        animation-direction: alternate;
        height: 75vw;
        width: 75vw;
        border-radius: 100%;
        position: absolute;
        top: 15%;
        left: 15%;
        /* background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%); */
        opacity: 0.15;
        filter: blur(25px);
        background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CradialGradient id=%22radialGradientId%22 r=%22100%25%22 cx=%2250%25%22 cy=%2250%25%22 %3E %3Cstop offset=%220%25%22 stop-color=%22%23e1bbff%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%238d34fe%22 %2F%3E %3C%2FradialGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23radialGradientId)%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
    }
    .blob-2 {
        animation: shimmy-2 5s infinite;
        animation-direction: alternate;
        height: 50vw;
        width: 50vw;
        border-radius: 100%;
        position: absolute;
        top: 85%;
        left: 85%;
        /* background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%); */
        opacity: 0.15;
        filter: blur(25px);
        background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CradialGradient id=%22radialGradientId%22 r=%22100%25%22 cx=%2250%25%22 cy=%2250%25%22 %3E %3Cstop offset=%220%25%22 stop-color=%22%23e1bbff%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%238d34fe%22 %2F%3E %3C%2FradialGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23radialGradientId)%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
    }
    .blob-3 {
        animation: shimm-3 8s infinite;
        animation-direction: alternate;
        height: 25vh;
        width: 25vh;
        border-radius: 100%;
        position: absolute;
        top: 85%;
        left: 85%;
        /* background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%); */
        opacity: 0.15;
        filter: blur(25px);
        background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CradialGradient id=%22radialGradientId%22 r=%22100%25%22 cx=%2250%25%22 cy=%2250%25%22 %3E %3Cstop offset=%220%25%22 stop-color=%22%23e1bbff%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%238d34fe%22 %2F%3E %3C%2FradialGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23radialGradientId)%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
    }
    .blob-4 {
        animation: shimmy-4 2s infinite;
        animation-direction: alternate;
        height: 35vh;
        width: 35vh;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        /* background: linear-gradient(270deg, #c172ff 0%, #8d34fe 100%); */
        opacity: 0.15;
        filter: blur(25px);
        background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CradialGradient id=%22radialGradientId%22 r=%22100%25%22 cx=%2250%25%22 cy=%2250%25%22 %3E %3Cstop offset=%220%25%22 stop-color=%22%23e1bbff%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%238d34fe%22 %2F%3E %3C%2FradialGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23radialGradientId)%22 d=%22M768%2C565.5Q681%2C631%2C651.5%2C753Q622%2C875%2C520.5%2C812Q419%2C749%2C263.5%2C767Q108%2C785%2C140%2C642.5Q172%2C500%2C197.5%2C399.5Q223%2C299%2C300%2C209.5Q377%2C120%2C494%2C139Q611%2C158%2C667.5%2C247.5Q724%2C337%2C789.5%2C418.5Q855%2C500%2C768%2C565.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
    }
}
.container {
    display: inline-block;
    width: 6ch;
    overflow: hidden;
    transform: translateY(25%);
    @apply sm:h-[2ch];
}
.animated {
    display: inline-block;
    animation: currentWord 2s infinite;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
@keyframes currentWord {
    0% {
        transform: translateY(100%);
    }
    50% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}
@keyframes shimmy {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(20%, 100%);
    }
}
@keyframes shimmy-2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, -100%);
    }
}
@keyframes shimmy-3 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0%, -30%);
    }
}
@keyframes shimmy-4 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(20%, 50%);
    }
}
</style>
