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
}

@font-face {
  font-family: "MISA-Regular";
  src: url("./assets/font/GoogleSans-Regular.otf") format("opentype");
}

@font-face {
  font-family: "MISA-Bold";
  src: url("./assets/font/GoogleSans-Bold.otf") format("opentype");
}

@font-face {
  font-family: "MISA-Italic";
  src: url("./assets/font/GoogleSans-Italic.otf") format("opentype");
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
