<template>
  
  <div class="bg-gray-700 text-white text-center m-auto w-1/2 py-10 sm:w-1/2 sm:p-18 sm:py-12 md:w-1/2 md:p-20 mt-40 rounded-xl">
    <h1 class="font-got text-4xl text-white">Random Quotes</h1>
    <p class="text-2xl font-merri mt-7">{{ sentences.sentence }}</p>
    <p class="font-alisson text-4xl italic">
      {{ sentences.character.name }}
    </p>
    <p class="text-2xl font-merri">{{ sentences.character.house.name }}</p>
    <Btn class="mt-7 m-auto " @click="getGot"> Click here! </Btn>
  </div>
</template>

<script>
import FirstComp from "./components/FirstComp.vue";
import Btn from "./components/Btn.vue";
import Picture from "./components/Picture.vue";
import axios from "axios";

export default {
  components: {
    FirstComp,
    Btn,
    // Picture,
  },

  mounted() {
    this.getGot();
  },

  data() {
    return {
      sentences: { character: { house: {} } },
    };
  },

  methods: {
    async getGot() {
      const QuotesRandom = await axios.get(
        "https://game-of-thrones-quotes.herokuapp.com/v1/random"
      );
      this.sentences = QuotesRandom.data;
    },
  },
};
</script>



