<template>
  <div>
    <v-layout justify-center>
      <v-text class="font">"Dog Glasses"</v-text>
    </v-layout>
    <v-layout align-center justify-center>
      <img src="/portpolio/image/line.png" class="image-line" />
    </v-layout>
    <!--첫번째문단-->
    <v-layout class="layout-margin-top">
      <v-row>
        <v-flex class="logo">
          <img src="/portpolio/image/image-dogglasses/logo.png" />
        </v-flex>
        <v-flex class="pa-10" text-left>
          <v-text class="logo-text">
            <br />
            반려동물을 기르는 가구가 많아지면서 반려동물을 위한 아이디어를
            생각했습니다
            <br />
            그러다 반려동물의 노화로 인한 시력 저하가 불편함을 깨닫고
            <br />
            반려동물의 시력 보정, 보호해줄 반려동물안경이 필요하다고
            생각했습니다.
          </v-text>
        </v-flex>
      </v-row>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--두번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 아이디어 선정 이유 </v-text>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center class="image6">
      <img src="/image/image-dogglasses/image6.png" />
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="pa-10" text-center>
        <v-text class="image6-text">
          <br />
          또한, 반려동물을 기르는 가구원 수가 증가하면서 반려동물 시장의 규모가
          증가할거라 예상했고,
          <br />
          이에 따라 반려동물 용품 매출이 증가하고, 앞으로도 더 증가할 것임을
          예측했습니다.
          <br />
          그래서 반려동물 안경이 출시된다면, 많은 사람들이 이용할 것이라고
          생각했습니다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--세번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 반려동물 안경 구성도 </v-text>
      </v-flex>
    </v-layout>
    <v-layout class="layout-margin-bottom">
      <v-row>
        <v-flex text-right class="pa-15">
          <br />
          <br />
          <v-text class="image1-text">
            구상한 반려동물 안경은 렌즈 부분과 그 주변이 고무로 되어있어
            흘러내리지 않습니다.
            <br />
            통풍 구멍이 있어 습기가 차는것을 예방합니다.
            <br />
            그리고 조절끈과 버클로 개체별 두상에 따라 조절이 가능합니다.
            <br />
            뒷부분에 천을 덧대어 더 편안하게 착용할 수 있도록 했습니다.
          </v-text>
        </v-flex>
        <v-flex>
          <img src="/portpolio/image/image-dogglasses/image1.jpg" />
        </v-flex>
      </v-row>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--네번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 여성발명대회 출전 </v-text>
      </v-flex>
    </v-layout>

    <!--다섯번째문단-->
    <v-layout class="layout-margin-bottom">
      <v-flex class="pa-6 image7" text-center>
        <img src="/portpolio/image/image-dogglasses/image7.png" />
      </v-flex>
      <v-flex class="image56">
        <v-col>
          <v-flex>
            <img src="/portpolio/image/image-dogglasses/image2.png" />
          </v-flex>
          <v-flex>
            <img src="/image/image-dogglasses/image5.png" />
          </v-flex>
        </v-col>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-row>
        <v-flex text-center>
          <br />
          <br />
          <v-text class="image7-text">
            특허청과 한국여성발명협회에서 주관한 여성발명대회(여성발명왕EXPO)에
            '시력보정 애완동물 안경'이란 주제로 출전했습니다.
            <br />
            심사위원앞에서 팀별로 발표를 하며 발명품을 설명합니다.
            <br />
            팀원들의 참여가 저조하여 힘들었으나 발표까지 무사히 끝마칠 수
            있었습니다.
            <br />
            그 결과 여성발명대회에서 동상을 수상하게 되었습니다.
          </v-text>
          <br />
          <br />
        </v-flex>
      </v-row>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Home",
  data() {},
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped lang="less">
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");
.font {
  font-family: "Lobster", cursive;
  font-size: 150px;
  align-content: center;
  margin-bottom: 20%;
}
.image {
  width: 70%;
  height: 70%;
}
.image-line {
  width: 70%;
  height: 70%;
  margin-top: -45%;
}
.logo {
  margin-left: 23%;
}
.image6 {
  margin-top: 4%;
}
.image7 {
  margin-left: 15%;
}
.image56 {
  margin-left: -10%;
}
.logo-text {
  font-size: 25px;
  margin-left: -20%;
  font-family: "Gowun Dodum", sans-serif;
}
.image1-text {
  font-size: 25px;
  font-family: "Gowun Dodum", sans-serif;
}
.image6-text {
  font-size: 25px;
  margin-left: 28%;
  font-family: "Gowun Dodum", sans-serif;
}
.image7-text {
  font-size: 25px;
  font-family: "Gowun Dodum", sans-serif;
}
.title-text {
  font-size: 70px;
  font-family: "Gowun Dodum", sans-serif;
  margin-top: 20%;
}
.layout-margin-top {
  margin-top: -10%;
}
.layout-margin-bottom {
  margin-top: 4%;
}
.divider-size {
  margin-top: 7%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 7%;
}
</style>

