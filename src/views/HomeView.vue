<template>
  <div>
    <v-layout justify-center>
      <v-text class="font">dabin's Portpolio</v-text>
    </v-layout>
    <v-layout align-center justify-center>
      <img src="/portpolio/image/line.png" class="image-line" />
    </v-layout>

    <!--DogGlasses-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"Dog Glasses"</v-text>
    </v-layout>
    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img
                src="/portpolio/image/image-dogglasses/image1.jpg"
                class="image"
              />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 data-aos="fade-top">
            <v-responsive :aspect-ratio="1 / 1">
              <img
                src="/portpolio/image/image-dogglasses/image2.png"
                class="image"
              />
            </v-responsive>
          </v-flex>
        </v-col>
      </v-layout>

      <div class="size">
        <v-layout>
          <v-col>
            <v-flex xs8 sm4 data-aos="fade-down">
              <v-responsive :aspect-ratio="1 / 1">
                <img
                  src="/portpolio/image/image-dogglasses/image5.png"
                  class="image"
                />
              </v-responsive>
            </v-flex>
            <v-flex xs8 sm4 data-aos="fade-up">
              <v-responsive :aspect-ratio="1 / 1">
                <img
                  src="/portpolio/image/image-dogglasses/logo.png"
                  class="image"
                />
              </v-responsive>
            </v-flex>
          </v-col>
        </v-layout>
      </div>
    </div>
    <v-layout justify-center>
      <v-btn
        icon
        @click="goDogGlasses"
        align-center
        justify-center
        class="icon"
      >
        <v-icon large>mdi-arrow-right</v-icon>
      </v-btn>
    </v-layout>
    <v-divider class="divider-size"></v-divider>

    <!--SafetyCheck-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"Safety Check"</v-text>
    </v-layout>

    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 data-aos="fade-top">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>
        </v-col>
      </v-layout>
      <div class="size">
        <v-layout>
          <v-col>
            <v-flex xs8 sm4 data-aos="fade-down">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="/portpolio/image/top1.jpg" class="image" />
              </v-responsive>
            </v-flex>
            <v-flex xs8 sm4 data-aos="fade-up">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="/portpolio/image/top1.jpg" class="image" />
              </v-responsive>
            </v-flex>
          </v-col>
        </v-layout>
      </div>
    </div>
    <v-layout justify-center>
      <v-btn
        icon
        @click="goSafetyCheck"
        align-center
        justify-center
        class="icon"
      >
        <v-icon large>mdi-arrow-right</v-icon>
      </v-btn>
    </v-layout>
    <v-divider class="divider-size"></v-divider>

    <!--PetFoodCheckingProgram-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"PetFood Checking Program"</v-text>
    </v-layout>

    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 data-aos="fade-top">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>
        </v-col>
      </v-layout>
      <div class="size">
        <v-layout>
          <v-col>
            <v-flex xs8 sm4 data-aos="fade-down">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="/portpolio/image/top1.jpg" class="image" />
              </v-responsive>
            </v-flex>
            <v-flex xs8 sm4 data-aos="fade-up">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="/portpolio/image/top1.jpg" class="image" />
              </v-responsive>
            </v-flex>
          </v-col>
        </v-layout>
      </div>
    </div>
    <v-layout justify-center>
      <v-btn
        icon
        @click="goPetFoodCheckingProgram"
        align-center
        justify-center
        class="icon"
      >
        <v-icon large>mdi-arrow-right</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
  mounted() {
    AOS.init();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
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

<style scoped lang="less">
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
.swiper {
  height: 100vh;
  .slide {
    background-size: cover;
    background-position: center center;
  }
}
.font {
  font-family: "Lobster", cursive;
  font-size: 200px;
  align-content: center;
  margin-bottom: 20%;
  margin-top: 20%;
}
.image {
  width: 70%;
  height: 70%;
  margin-left: 10%;
}
.image-line {
  width: 70%;
  height: 70%;
  margin-top: -45%;
}
.font-explanation {
  font-family: "Lobster", cursive;
  font-size: 60px;
  aling-content: center;
  margin-bottom: 25px;
}
.icon {
  margin-left: 7px;
  margin-top: -20%;
}
.size {
  margin-left: -55%;
}
.size2 {
  margin-left: 35%;
}
.divider-size {
  margin-bottom: 50px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>

