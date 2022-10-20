<template>
  <div>
    <v-layout justify-center>
      <v-text class="font">"PetFood Checking Program"</v-text>
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
          PetFood Checking Program은 Python, OpenCV와 다루지 않았던 EasyOCR,
          Flask, SQLite3, SQLAlchemy 등을 활용하여
          <br />
          성분표를 찍어 업로드하면 반려동물에게 유해한 성분이 있는지 검사하고
          있다면 리스트 형식으로 출력하는 프로그램입니다.
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
          최근 핵가족화 및 1인 가구 증가로 반려동물을 키우는 가구가 늘면서 관련
          펫푸드 시장과 반려동물 헬스케어 시장이 함께 확대되고 있습니다.

          <br />

          이에 따라 펫푸드 관련 영양성분에 대한 관심이 커지고 있습니다.

          <br />

          그래서 수업시간에 배운 딥러닝을 이용하여 이미지 인식, 문자 인식 기술을
          기반으로

          <br />

          반려동물이 섭취해도 되는 식품과 섭취하면 안 되는 식품을 구별하는
          반려동물의 헬스케어를 위한 프로그램을 제작하기로 했습니다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--세번째문단-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 프로젝트 구성 </v-text>
      </v-flex>
    </v-layout>
    <br />
    <br />
    <v-layout align-center justify-center class="image1">
      <img src="/portpolio/image/image-petfood/image1.png" />
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <v-text class="comment">
          데이터베이스에서는 사용자 인증 및 정보, 사진 분석 결과 정보를
          관리합니다.
          <br />
          API에서는 사진 업로드와 OpenCV와 EasyOCR로 업로드된 식품의 성분표
          사진을 분석하여 섭취해도 되는 성분과 섭취하면 안 되는 성분을
          구분합니다.
          <br />
          웹페이지에서는 분석하여 출력된 결과를 화면에 보이게 합니다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>
    <v-divider class="divider-size"></v-divider>
    <!--네번째문단 (웹페이지 구성(공통))-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 웹페이지 구성 - 공통 </v-text>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex text-center>
        <img src="/portpolio/image/image-petfood/image2.png" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          메인페이지 - 로그인, 회원가입 버튼이 있다.
          <br />
          로그인 페이지 - 회원가입한 아이디로 로그인이 가능하다.
          <br />
          회원가입 페이지 - 아이디, 이메일, 비밀번호를 입력하면 회원가입이
          가능하다.
        </v-text>
        <br />
      </v-flex>
    </v-layout>

    <v-divider class="divider-size"></v-divider>
    <!--다섯번째문단 (웹페이지 구성(회원))-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 웹페이지 구성 - 회원 </v-text>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex text-center>
        <img src="/portpolio/image/image-petfood/image3.png" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          1. 검색 선택 페이지 - 단순 검색(키워드)인지 사진 검색인지 선택한다.
          <br />
          2. 단순 검색 페이지 - 키워드로 검색이 가능하다.
          <br />
          3. 단순 검색 결과 페이지 - DB와 비교하여 결과를 출력한다.
          <br />
          4. 사진 검색 페이지 - 사진을 업로드하여 검색한다.
          <br />
          5. 사진 검색 결과 페이지 - 업로드한 사진 속 키워드를 추출하여 DB와
          비교한 후 결과를 출력한다.
          <br />
          6. 사용자 결과 리스트 페이지 - 분석하여 나온 결과를 저장하여 리스트
          형태로 출력한다.
        </v-text>
      </v-flex>
    </v-layout>

    <v-divider class="divider-size"></v-divider>

    <!--여섯번째문단 (웹페이지 구성(비회원))-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 웹페이지 구성 - 비회원 </v-text>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex text-center>
        <img src="/portpolio/image/image-petfood/image4.png" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          1. 검색 선택 페이지 - 단순 검색(키워드)인지 사진 검색인지 선택한다.
          <br />
          2. 단순 검색 페이지 - 키워드로 검색이 가능하다.
          <br />
          3. 단순 검색 결과 페이지 - DB와 비교하여 결과를 출력한다.
          <br />
          4. 사진 검색 페이지 - 사진을 업로드하여 검색한다.
          <br />
          5. 사진 검색 결과 페이지 - 업로드한 사진 속 키워드를 추출하여 DB와
          비교한 후 결과를 출력한다.
          <br />
        </v-text>
      </v-flex>
    </v-layout>

    <v-divider class="divider-size"></v-divider>

    <!--일곱번째문단 (웹페이지 구성(관리자))-->
    <v-layout>
      <v-flex text-center>
        <v-text class="title-text"> 웹페이지 구성 - 관리자 </v-text>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <img src="/portpolio/image/image-petfood/image5.png" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-center>
        <br />
        <br />
        <v-text class="comment">
          1. 유해성분 등록 페이지 - 관리자가 유해성분 리스트에 유해성분을
          등록시킨다.
          <br />
          2. 유해성분 리스트 페이지 - 관리가자 등록시킨 유해성분을 리스트 형태로
          출력한다.
          <br />
          3. 유해성분 수정 페이지 - 등록한 유해성분을 수정할 수 있다.
          <br />
          4. 유해성분 삭제 페이지 - 등록한 유해성분을 삭제할 수 있다.
        </v-text>
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
</style>

