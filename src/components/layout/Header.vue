<template>
  <div class="header">
    <div class="header-left">
      <div class="header-title">
        <span class="header-title-text">Lập kế hoạch thu</span>
        <font-awesome-icon class="header-title-icon" icon="question-circle" />
        <!-- <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle btn-select btn-list-restaurant"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Nhà hàng biển đông
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Kho tổng</a>
            <a class="dropdown-item" href="#">Đại dương xanh</a>
            <a class="dropdown-item" href="#">Nhà hàng biển đông</a>
            <a class="dropdown-item" href="#">Wine house</a>
          </div>
        </div> -->
      </div>
    </div>
    <div class="header-right">
      <div class="account">
        <div class="account-name">
          <span>Nguyễn Văn Mạnh</span>
        </div>
        <div class="account-setting"></div>
        <div class="avatar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
</style>
