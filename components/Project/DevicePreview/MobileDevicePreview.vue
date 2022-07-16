<template>
    <div class="mobile relative">
        <div class="camera-container z-10">
            <div class="camera">
                <div class="lense"></div>
            </div>
            <div class="speaker" />
        </div>
        <div class="screen">
            <img
                class="w-full"
                :src="
                    require(`~/assets/images/projects/${$route.params.project}/Mobile/${preview}`)
                "
                alt="Mobile preview of project"
                srcset=""
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "MobileDevicePreview",
    props: {
        preview: {
            type: String,
            required: false,
        },
    },
};
</script>
<style scoped>
.mobile {
    position: relative;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.25), 0px 0px 5px white;
    aspect-ratio: 9 / 17;
    width: 75%;
    max-width: 350px;
    border: 10px solid black;
    border-radius: 40px;
    overflow: hidden;
    /* outline: 1px solid white; */
}

.mobile::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

.screen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
}

.camera-container {
    position: absolute;
    margin-top: -1px;
    top: 0;
    transform: translateX(50%);
    width: 50%;
    content: "";
    background: black;
    height: 20px;
    border-radius: 0 0 25px 25px;
}
.camera {
    position: absolute;
    top: 0;
    left: 20%;
    width: 12px;
    height: 12px;
    content: "";
    background: rgb(21, 21, 21);
    border-radius: 100%;
}

.lense {
    position: absolute;
    transform: translate(25%, 25%);
    background: rgb(9, 20, 39);
    height: 8px;
    width: 8px;
    border-radius: 100%;
    border: 2px solid black;
}
.speaker {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    height: 5px;
    border-radius: 2px;
    width: 25%;
    background: rgb(21, 21, 21);
}
</style>