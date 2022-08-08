<template>
    <div id="presentation">
        <h1 id="text-1">Bonjour, je suis</h1>
        <h1 id="text-2">Rachid</h1>
        <h1 id="text-3">
            <strong class="typing">Software Developer</strong>
        </h1>
        <a class="button-custom" aria-current="page" href="#contact">ME CONTACTER</a>
    </div>
</template>

<script>
export default {
    name: "Presentation",
};
</script>

<style scoped>
#presentation {
    display: flex;
    height: 100vh;
    /* color: white; */
    min-height: 500px;
    font-family: "Ubuntu", sans-serif;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
}

#presentation #text-1 {
    font-size: 27px;
}
#presentation #text-2 {
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
}
#presentation #text-3 {
    font-size: 40px;
    margin: 5px 0;
}
#presentation #text-3 strong {
    color: crimson;
    font-weight: 500;
}

</style>