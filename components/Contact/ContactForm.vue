<template>
    <form
        class="w-full md:w-3/5 flex flex-col text-base font-normal"
        :name="name"
        method="POST"
        data-netlify="true"
    >
        <h3>Contact Me</h3>
        <p>Fill out the form and I’ll get back to you as soon as possible!</p>
        <label>Full Name*</label>
        <input type="text" name="name" placeholder="Your full name" required />
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
        <div class="w-full flex justify-center">
            <button class="button-filled !w-[40rem]" type="submit">
                Send Message <MailSvg class="h-10 w-10 ml-4 inline" />
            </button>
        </div>
    </form>
</template>
<script>
export default {
    name: "ContactForm",
    components: {
        MailSvg: () => import("@/assets/images/Mail.svg"),
    },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
h3 {
    @apply text-[4.8rem] font-bold;
}
p {
    @apply text-base mb-12;
}
input {
    @apply h-12 py-8;
}
textarea {
    @apply pt-4 h-80;
}
input,
textarea {
    @apply bg-[#1A133E] rounded-lg px-4 mb-6;
}
label {
    @apply text-base font-medium;
}
</style>