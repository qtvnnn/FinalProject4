<template>
  <div id="app">
    <div class="body-left">
      <NavBar />
    </div>
    <div class="body-right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/layout/NavBar";
import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";

export default {
  name: "App",
  components: {
    NavBar,
    Header,
    Content,
  },
};
</script>



<style>
body {
  font-family: "MISA-Regular" !important;
  font-size: 13px !important;
  margin: 0px !important;
  padding: 0px !important;
  height: 100vh !important;
  background: #393a3d !important;
}

@font-face {
  font-family: "MISA-Regular";
  src: url("./assets/font/notosans-regular.2cb88a13.woff2") format("opentype");
}

@font-face {
  font-family: "MISA-Bold";
  src: url("./assets/font/notosans-bold.3ede5aff.woff2") format("opentype");
}

@font-face {
  font-family: "MISA-Italic";
  src: url("./assets/font/notosans-italic.1c1aaac9.woff2") format("opentype");
}

@font-face {
  font-family: "MISA-SemiBold";
  src: url("./assets/font/notosans-semibold.df3e6dc4.woff2") format("opentype");
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #bbbbbb;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #6c757d;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
