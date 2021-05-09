<template>
  <div>
    <div class="sidebar">
      <div class="toggle"></div>
      <div class="logo"></div>
    </div>
    <div class="menu">
      <router-link class="menu-item" to="/about">
        <div class="icon overview"></div>
        <div class="item-name">Tổng quan</div>
      </router-link>
      <router-link class="menu-item" to="/report">
        <div class="icon report"></div>
        <div class="item-name">Báo cáo</div>
      </router-link>
      <router-link class="menu-item" to="/shop">
        <div class="icon purchase"></div>
        <div class="item-name">Mua hàng</div>
      </router-link>
      <router-link class="menu-item" to="/dictionary/customer">
        <div class="icon list-customer"></div>
        <div class="item-name">Danh mục khách hàng</div>
      </router-link>
      <router-link class="menu-item" to="/dictionary/employee">
        <div class="icon list-employee"></div>
        <div class="item-name">Danh mục nhân viên</div>
      </router-link>
      <router-link class="menu-item" to="/system">
        <div class="icon setting"></div>
        <div class="item-name">Thiết lập hệ thống</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  methods: {},
};
</script>

<style scoped>
</style>
