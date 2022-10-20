<template>
  <div>
    <v-layout justify-center>
      <v-text class="font">dabin's Portpolio</v-text>
    </v-layout>
    <v-layout align-center justify-center>
      <img src="/portpolio/image/line.png" class="image-line" />
    </v-layout>
    <v-layout class="comment-margin">
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          2020, 2021, 2022년도 별 프로젝트 하나씩을 골라 포트폴리오를
          작성했습니다.
          <br />
          포트폴리오 프로젝트는 총 세개로 "Dog Glasses", "SafetyCheck",
          "PetFoodCheckingProgram" 입니다.
          <br />
          프로젝트 별 상세 페이지는 헤더를 통해 보실 수 있습니다.
          <br />
          프로젝트 별 상세 페이지에서 홈으로 돌아올 때에도 헤더를 이용합니다.
          <br />
          <br />
          지금은 메인 페이지로 프로젝트 별로 간단히 이미지를 넣었습니다.
          <br />
          아직은 많이 부족하나 앞으로 더 공부를 하여 포트폴리오를 많이 채워나갈
          것입니다.
          <br />
          제 포트폴리오를 봐주셔서 감사합니다!
        </v-text>
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--DogGlasses-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"Dog Glasses"</v-text>
    </v-layout>

    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        data-aos="fade-in"
        data-aos-duration="1000"
        class="slide"
        style="
          background-image: url(/portpolio/image/image-dogglasses/logo.png);
        "
      >
        <v-layout
          data-aos="fade-up"
          data-aos-duration="1000"
          fill-height
          align-center
          justify-center
        >
        </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-dogglasses/image1.jpg);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-dogglasses/image5.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-dogglasses/image2.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
    </swiper>

    <v-divider class="divider-size"></v-divider>

    <!--SafetyCheck-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"SafetyCheck"</v-text>
    </v-layout>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        data-aos="fade-in"
        data-aos-duration="1000"
        class="slide"
        style="
          background-image: url(/portpolio/image/image-safetycheck/image5.png);
        "
      >
        <v-layout
          data-aos="fade-up"
          data-aos-duration="1000"
          fill-height
          align-center
          justify-center
        >
        </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-safetycheck/image6.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-safetycheck/image7.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-safetycheck/image8.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
    </swiper>
    <v-divider class="divider-size"></v-divider>

    <!--PetFoodCheckingProgram-->
    <v-layout align-center justify-center>
      <v-text class="font-explanation">"PetFoodCheckingProgram"</v-text>
    </v-layout>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        data-aos="fade-in"
        data-aos-duration="1000"
        class="slide"
        style="background-image: url(/portpolio/image/image-petfood/image6.png)"
      >
        <v-layout
          data-aos="fade-up"
          data-aos-duration="1000"
          fill-height
          align-center
          justify-center
        >
        </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="background-image: url(/portpolio/image/image-petfood/image7.png)"
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="background-image: url(/portpolio/image/image-petfood/image8.png)"
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="background-image: url(/portpolio/image/image-petfood/image9.png)"
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-petfood/image10.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="
          background-image: url(/portpolio/image/image-petfood/image11.png);
        "
      >
        <v-layout fill-height align-center justify-center> </v-layout>
      </swiper-slide>
    </swiper>
    <v-divider class="divider-size"></v-divider>
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
          delay: 1000,
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
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");

.swiper {
  height: 30vh;
  width: 50vh;
  .slide {
    background-position: center center;
  }
}
.font {
  font-family: "Lobster", cursive;
  font-size: 200px;
  align-content: center;
  margin-bottom: 20%;
  margin-top: 10%;
}
.section {
  width: 1190px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  .header {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
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
  margin-bottom: 25px;
}
.comment {
  font-size: 25px;
  font-family: "Gowun Dodum", sans-serif;
}
.comment-margin {
  margin-top: -15%;
}
.divider-size {
  margin-bottom: 50px;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 50px;
}
</style>

