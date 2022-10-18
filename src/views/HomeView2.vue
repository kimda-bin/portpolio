<template>
  <div>
    <v-layout>
      <v-text class="font">Portpolio</v-text>
      <v-divider inset></v-divider>
    </v-layout>
    <!--프로젝트1-->
    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 text-left>
            <v-text class="font-projectname">과제 이름</v-text>
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
    <!--프로젝트2-->
    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 text-left>
            <v-text class="font-projectname">과제 이름</v-text>
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
    <!--프로젝트3-->
    <div style="display: flex" class="size2">
      <v-layout>
        <v-col>
          <v-flex xs8 sm4 data-aos="fade-right">
            <v-responsive :aspect-ratio="1 / 1">
              <img src="/portpolio/image/top1.jpg" class="image" />
            </v-responsive>
          </v-flex>

          <v-flex xs5 sm4 text-left>
            <v-text class="font-projectname">과제 이름</v-text>
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
  margin-left: 35%;
  margin-bottom: 10%;
}
.image {
  width: 70%;
  height: 70%;
  margin-left: 10%;
}
.font-projectname {
  font-size: 30px;
  align-content: left;
  margin-left: 10%;
}
.size {
  margin-left: -55%;
}
.size2 {
  margin-left: 35%;
}
</style>

