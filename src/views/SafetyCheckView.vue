<template>
  <div>
    <v-layout justify-center>
      <v-text class="font">"SafetyCheck"</v-text>
    </v-layout>
    <v-layout align-center justify-center>
      <img src="/portpolio/image/line.png" class="image-line" />
    </v-layout>
    <!--첫번째문단-->
    <v-layout class="layout-margin">
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          발열 체크와 전자출입명부 작성을 동시에 해서 신속하고 편리하게 해주는
          기기입니다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--두번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 선정 이유 </v-text>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          수업 시간에 다룬 아두이노 메가 2560, LCD 모듈, LED, Buzzer 등과 다루지
          않았던 비접촉식 적외선 온도 센서, QR코드 스캐너 모듈, USB Host shield
          등의
          <br />
          새로 접하는 개발 도구를 접목하여 아두이노에 대한 이해도를 높이고
          이것을 활용하여
          <br />
          발열 체크와 출입자 개인의 QR코드 인증 및 재발급의 번거로움을 줄임과
          동시에 개인 정보 유출을 방지하고 안전한 데이터를 활용하여 편리함을
          증가시키기 위함입니다.
        </v-text>

        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--세번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 구성도 </v-text>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center class="image1">
      <img src="/portpolio/image/image-safetycheck/image1.png" />
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          장치 내의 초음파 센서가 손목과의 거리를 측정하여 5cm 이내로 인식이
          되었을 때, 비접촉식 적외선 온도센서가 체온을 측정한다.
          <br />
          초음파 센서로 5cm 이내의 손목을 인식하고, 비접촉식 적외선 온도센서로
          체온을 측정한다.
          <br />
          동시에 바코드 스캐너가 QR코드 팔찌의 정보를 읽는다.
          <br />
          체온과 QR코드 팔찌 정보에 따라 LCD 화면과 LED 및 Buzzer를 제어한다.
        </v-text>

        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--네번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 관계도 </v-text>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center class="image1">
      <img src="/portpolio/image/image-safetycheck/image2.png" />
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          체온이 35도 미만(저체온) : LCD 화면에 측정된
          체온과“인증되었습니다.”라는 메시지가 출력되고, LED에 파란불이
          들어온다.
          <br />
          체온이 35도~37.5 미만일 때(정상) : LCD 화면에 측정된
          체온과“인증되었습니다.”라는 메시지가 출력되고, LED에 초록불이
          들어온다.
          <br />
          체온이 37.5도 이상일 때 : LCD 화면에 측정된 체온과“출입
          불가능합니다.”라는 메시지가 출력되고, LED에 빨간불이 들어옴과 동시에
          Buzzer에서 알림음이 송출된다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--다섯번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 결과물 - 기기 </v-text>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center class="image1">
      <img src="/portpolio/image/image-safetycheck/image3.png" />
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          안심번호가 기록되어있는 QR 팔찌를 착용하여 인식부에 갖다 댄다.
          <br />
          인식부의 초음파센서, 바코드 스캐너, 비접촉식 온도계가 QR과 체온을
          읽는다.
          <br />
          체온과 체온에 따른 출입 가능 여부가 LCD 화면에 나타난다.
        </v-text>

        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--여섯번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 결과물 - 앱 </v-text>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center class="image1">
      <img src="/portpolio/image/image-safetycheck/image4.png" />
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          메인화면, 앱 이용가이드 화면, 개인 사용자 화면, 관리자 화면으로
          구성되어있다.
          <br />
          개인 사용자의 안심번호 입력 시 개인의 방문 기록을 확인할 수 있다.
          <br />
          관리자 사용자의 비밀번호 입력 시 시설관리자 자신이 관리하는 시설의
          방문자 기록을 확인할 수 있다.
        </v-text>

        <br />
      </v-flex>
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

  methods: {},
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
.image1 {
  margin-top: 4%;
  margin-bottom: 3%;
}
.comment {
  font-size: 25px;
  font-family: "Gowun Dodum", sans-serif;
}
.title-text {
  font-size: 70px;
  font-family: "Gowun Dodum", sans-serif;
}
.layout-margin {
  margin-top: -15%;
}
.divider-size {
  margin-top: 7%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 7%;
}
.web-image {
  margin-top: 10%;
  margin-left: 35%;
}
.web-text {
  font-size: 25px;
  margin-left: 10%;
  font-family: "Gowun Dodum", sans-serif;
}
.web-text-margin {
  margin-top: 10%;
}
</style>

