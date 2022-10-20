
<template>
  <div class="header">
    <v-layout align-center>
      <v-btn text class="logo" @click="gohome">dabin's portpolio</v-btn>
      <v-spacer></v-spacer>
      <v-btn text class="logo" @click="goDogGlasses">DogGlasses</v-btn>
      <v-btn text class="logo" @click="goSafetyCheck">SafetyCheck</v-btn>
      <v-btn text class="logo" @click="goPetFoodCheckingProgram"
        >PetFoodCheckingProgram</v-btn
      >
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    gohome() {
      this.$router.push("/");
    },
    goDogGlasses() {
      this.$router.push("/DogGlasses");
    },

    goSafetyCheck() {
      this.$router.push("/SafetyCheck");
    },
    goPetFoodCheckingProgram() {
      this.$router.push("/PetFoodCheckingProgram");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");

.header {
  padding: 20px;
}
.header .logo {
  font-family: "Gowun Dodum", sans-serif;
  font-size: 20px;
}
</style>
