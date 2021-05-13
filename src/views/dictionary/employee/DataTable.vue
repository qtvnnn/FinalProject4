<template>
  <div class="content">
    <BaseLoading :showLoading="isLoading" />
    <div class="content-header">
      <div class="content-header-left">
        <span class="menu-item-selected">Nhân viên</span>
      </div>
      <div class="content-header-right">
        <a
          class="btn btn-add-employee"
          role="button"
          v-on:click="btnAddOnClick"
        >
          <div class="item-name">Thêm</div>
        </a>

        <div class="alert alert-success alertToggleData" id="alert">
          <span class="textAlertData">data was saved</span>
          <a href="#" class="close" data-dismiss="alert">&times;</a>
        </div>
      </div>
    </div>
    <div class="customer-filter">
      <div class="customer-filter-left"></div>
      <div class="customer-filter-right">
        <div class="input-search">
          <input
            type="text"
            class="txtInput-search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-on:keyup.13="filterInput($event)"
            placeholder="Tìm theo mã, tên nhân viên"
          />
          <div class="icon icon-input-search"></div>
        </div>
        <a class="btn btn-reset-filter" href="#" v-on:click="btnResetTable">
          <div class="icon icon-reset-filter"></div>
        </a>
      </div>
    </div>
    <div class="data-table">
      <table class="table table-hover" width="100%" border="0">
        <thead>
          <tr>
            <th>MÃ NHÂN VIÊN</th>
            <th>TÊN NHÂN VIÊN</th>
            <th>GIỚI TÍNH</th>
            <th>NGÀY SINH</th>
            <th>SỐ CMND</th>
            <th>CHỨC DANH</th>
            <th>TÊN ĐƠN VỊ</th>
            <th>SỐ TÀI KHOẢN</th>
            <th>TÊN NGÂN HÀNG</th>
            <th>CHI NHÁNH TK NGÂN HÀNG</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(employee, index) in employees"
            :key="employee.EmployeeId"
            @dblclick="rowOnClick(employee)"
          >
            <td>{{ employee.EmployeeCode }}</td>
            <td>{{ employee.EmployeeName }}</td>
            <td>{{ employee.gender }}</td>
            <td>{{ employee.DateOfBirth | formatDate }}</td>
            <td>{{ employee.IdentityNumber }}</td>
            <td>{{ employee.EmployeePosition }}</td>
            <td>{{ employee.IdentityPlace }}</td>
            <td>{{ employee.BankAccountNumber }}</td>
            <td>
              {{ employee.BankName }}
            </td>
            <td>{{ employee.BankBranchName }}</td>
            <td>
              <div class="btn-delete-employee">
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-toggle="modal"
                  :data-target="'#exampleModal' + index"
                >
                  <font-awesome-icon icon="trash" />
                </button>
              </div>

              <!-- Modal -->
              <div
                class="modal modal-style fade"
                :id="'exampleModal' + index"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Thông báo
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" class="btn-close"
                          >&times;</span
                        >
                      </button>
                    </div>
                    <div class="modal-body">
                      Bạn có chắc muốn xóa những khoản thu đã chọn?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-confirm btn-closeNo"
                        data-dismiss="modal"
                      >
                        Không
                      </button>
                      <button
                        type="button"
                        class="btn btn-confirm btn-confirm-delete"
                        data-dismiss="modal"
                        v-on:click="deleteEmployee(employee.EmployeeId)"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <!-- <td class="btn-delete-employee">
              <button
                class="btn btn-danger btn-sm"
                v-on:click="deleteEmployee(employee.EmployeeId)"
              >
                <font-awesome-icon icon="trash" />
              </button>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="footer-table">
      <div class="footer-table-left">
        <span class="text-muted">Hiển thị 1-10/1000 nhân viên</span>
      </div>
      <div class="footer-table-right">
        <span class="text-muted">10 nhân viên/trang</span>
      </div>
    </footer>
    -->
    <Details
      @closePopup="closePopup"
      :isHide="isHideParent"
      :employee="selectedEmployee"
      :initEmployee="initEmployee"
      :showAlertData="showAlertData"
      :requestStatus="requestStatus"
      :departments="departments"
      :positions="positions"
    />
  </div>
</template>

<script>
import * as axios from "axios";
import $ from "jquery";
import Details from "./FormDetail.vue";
import BaseLoading from "../../../components/base/BaseLoading";
export default {
  name: "Content",
  components: {
    Details,
    BaseLoading,
  },
  methods: {
    // sự kiện click làm mới dữ liệu trong table
    async btnResetTable() {
      await this.initEmployee();
    },

    // sự kiện click hiện dialog form input để thêm mới nhân viên
    async btnAddOnClick() {
      this.requestStatus = 0;
      this.isHideParent = false;
      this.selectedEmployee = {};
      this.selectedEmployee = {
        EmployeeCode: await this.getNewEmployeeCode(),
        WorkStatus: 0,
        Gender: 1,
        DepartmentId: "142cb08f-7c31-21fa-8e90-67245e8b283e",
        PositionId: "148ed882-32b8-218e-9c20-39c2f00615e8",
      };
      console.log(this.selectedEmployee.EmployeeCode);
    },

    // sự kiện ấn đúp chuột để hiện thông tin chi tiết một nhân viên trên dialog input form
    rowOnClick(employee) {
      if (employee.DateOfBirth != null) {
        employee.DateOfBirth = this.formatDateToForm(employee.DateOfBirth);
      }
      this.requestStatus = 1;
      this.selectedEmployee = employee;
      this.isHideParent = false;
    },

    // thay đổi trạng thái đóng mở dialog input form
    async closePopup(value) {
      this.isHideParent = value;
    },

    // gọi api load dữ liệu
    async initEmployee() {
      this.isLoading = true;
      // get all employee
      const employeesAPI = await axios.get(
        "https://localhost:44325/api/v1/Employees"
      );
      // get all department
      const departmentAPI = await axios.get(
        "http://cukcuk.manhnv.net/api/Department"
      );
      // get all position
      const positionAPI = await axios.get(
        "http://cukcuk.manhnv.net/v1/Positions"
      );

      this.employees = employeesAPI.data;
      this.departments = departmentAPI.data;
      this.positions = positionAPI.data;

      this.isLoading = false;
    },

    // sự kiện gọi api xóa một bản ghi nhân viên
    async deleteEmployee(employeeId) {
      const response = await axios.delete(
        "http://cukcuk.manhnv.net/v1/Employees/" + employeeId
      );
      console.log(response);
      await this.initEmployee();
      this.showAlertData("Xóa một bản ghi nhân viên thành công");
    },

    // gọi api lấy mã nhân viên mới
    async getNewEmployeeCode() {
      const newEmployeeCodeAPI = await axios.get(
        "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode"
      );
      return newEmployeeCodeAPI.data;
    },

    // gọi api filter để tìm kiếm nhân viên theo tên, mã nhân viên, sđt
    async getDataFilter(valueInput) {
      this.isLoading = true;

      const employeesAPI = await axios.get(
        `http://cukcuk.manhnv.net/v1/Employees/employeeFilter?pageSize=100&employeeFilter=${valueInput}`
      );
      this.employees = employeesAPI.data.Data;

      this.isLoading = false;
    },

    // fix cứng value của trạng thái công việc
    statusWordString(statusWord) {
      switch (statusWord) {
        case 0:
          return "Đã nghỉ việc";
        case 1:
          return "Thực tập sinh";
        case 2:
          return "Đang thử việc";
        case 3:
          return "Nhân viên";
      }
    },

    // format ngày tháng năm để đúng định dạng insert
    formatDateToForm(dateString) {
      if (dateString !== null) {
        var res = dateString.split("-");
        var year = res[0];
        var month = res[1];
        var day = res[2].split("T")[0];
        return year + "-" + month + "-" + day;
      }
      return "";
    },

    // sự kiện filter theo tên, mã nhân viên, sđt
    async filterInput(txtInput) {
      let valueInput = txtInput.target.value;
      if (valueInput) {
        await this.getDataFilter(valueInput);
      } else {
        await this.initEmployee();
      }
    },

    // hiện alert thông báo
    showAlertData(alert) {
      $(".textAlertData").text(alert);
      $(".alertToggleData").css("display", "flex").delay(3000).fadeOut("slow");
    },

    async getEmployeeByDepartment(valueInput, departmentId) {
      this.isLoading = true;

      const employeesAPI = await axios.get(
        `http://cukcuk.manhnv.net/v1/Employees/employeeFilter?pageSize=100&employeeFilter=${valueInput}&departmentId=${departmentId}`
      );
      this.employees = employeesAPI.data.Data;

      this.isLoading = false;
    },

    async OnClick(textInput, employeeId) {
      let text = $(".inputbox-filter").val();
      if (text) {
        $("#dropdownMenuButtonDepartment").text(textInput);
        await this.getEmployeeByDepartment(text, employeeId);
      } else {
        alert("Nhập dữ liệu");
      }
    },
  },

  data() {
    return {
      isLoading: false,
      employees: [],
      departments: [],
      positions: [],
      selectedEmployee: {},
      isHideParent: true,
      requestStatus: 0,
    };
  },

  async created() {
    await this.initEmployee();
  },
};
</script>

<style scoped>
.content-header {
  height: 74px;
  width: 100%;
  background: #f4f5f6;
  padding-right: 30px;
  position: sticky;
  top: -1px;
  z-index: 999;
}

.btn-select {
  background-color: #ffffff;
}

.content-header-left {
  float: left;
  padding-left: 20px;
  display: flex;
  align-items: center;
}

.content-header-left .menu-item-selected {
  font-size: 24px;
  font-family: "MISA-Bold" !important;
  color: #111;
  padding-top: 22px;
}

.content-header-right {
  float: right;
  display: flex;
  align-items: center;
  padding-top: 22px;
}

.content-header-right .btn-add-employee {
  background-color: #2ca01c;
  color: #fff;
  padding: 8px 14px 8px 20px;
  height: 36px;
  border-radius: 30px 30px 30px 30px;
  border: 1px solid transparent;
}

.content-header-right .btn-add-employee .item-name {
  font-family: "MISA-SemiBold" !important;
  position: relative;
  color: inherit;
  display: flex;
  transition: all 0.25s ease;
  white-space: nowrap;
  font-size: 13px;
  justify-content: center;
  align-items: center;
}

.content-header-right .btn-add-employee:hover {
  background-color: #35bf22;
}

.icon.arrow-up {
  width: 16px;
  height: 16px;
  margin: 0 10px;
  background: url("../../../assets/img/Sprites.64af8f61.svg") no-repeat -848px -359px;
}

.icon.icon-input-search {
  width: 16px;
  height: 16px;
  margin: 0 10px;
  background: url("../../../assets/img/Sprites.64af8f61.svg") no-repeat -992px -360px;
  cursor: pointer;
  position: absolute;
  left: auto;
  right: 5px;
  border-right: 0;
  padding-left: 3px;
  margin-right: 4px;
}

.input-search {
  display: flex;
  width: 240px;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  justify-content: center;
}

.input-search .txtInput-search {
  font-size: 13px;
  height: 32px;
  color: inherit;
  position: relative;
  padding: 6px 10px;
  border-radius: 2px;
  border: 1px solid #babec5;
  box-sizing: border-box;
  width: 100%;
}

.content-header-right .btn-add-employee .icon-add-employee {
  width: 30px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  background-image: url("../../../assets/icon/add.png");
}

.customer-filter {
  height: 72px;
  width: 100%;
  background: #fff;
  position: absolute;
  right: 30px;
}

.customer-filter-left {
  height: 50px;
  float: left;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.customer-filter-left .input-filter,
.customer-filter-left .select-filter-department {
  padding-right: 15px;
}

.btn-list-department,
.btn-list-position {
  border: 1px solid #ced4da;
  width: 200px;
  text-align: left;
}

.select-filter-department .dropdown .dropdown-toggle::after,
.select-filter-position .dropdown .dropdown-toggle::after {
  position: relative;
  float: right;
  top: 10px;
}

.menu-department,
.menu-position {
  min-width: 200px !important;
}

.icon-search {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  background-image: url("../../../assets/icon/search.png");
}

.input-group-text {
  border-right: none !important;
  background-color: #ffffff !important;
}

.inputbox-filter {
  border-left: none !important;
}

.customer-filter-right {
  height: 50px;
  display: flex;
  align-items: center;
  float: right;
  padding-top: 16px;
}

.customer-filter-right .btn-reset-filter {
  background-color: #ffffff;
  padding-right: 16px;
}

.customer-filter-right .btn-reset-filter .icon-reset-filter {
  width: 24px;
  height: 24px;
  padding: 0 6px;
  background: url("../../../assets/img/Sprites.64af8f61.svg") no-repeat -1097px -88px;
}

.data-table {
  position: absolute;
  right: 30px;
  left: 0px;
  bottom: 60px;
  top: 146px;
  background: #fff;
  padding: 0px 30px 0px 16px;
}

.data-table .table-striped {
  position: relative;
  right: 30px;
}

.data-table th {
  position: sticky;
  top: 72px;
  background-color: white;
  font-size: 12px;
  text-transform: uppercase !important;
  align-items: center;
  cursor: pointer;
  padding: 7px 10px 7px 10px;
  border-right: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  background-color: #eceef1;
}

.data-table td {
  border-bottom: 1px solid #c7c7c7;
  border-right: 1px dotted #c7c7c7;
}

.data-table tr {
  cursor: pointer;
}

.btn-delete-employee {
  padding: 0px 0px 0px 0px;
  margin: -6px 0px -6px 0px;
}

.footer-table {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 46px;
  line-height: 46px;
  background-color: #f4f5f6;
  top: calc(100% - 46px);
}

.footer-table .row {
  width: 100% !important;
  margin: 0;
}

.footer-table-left {
  text-align: left;
  float: left;
  z-index: 999;
  position: sticky;
}

.footer-table-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-table-center .paging-number .btn-paging-number-item {
  background-color: #e9ebee;
  color: #6c757d;
  border-radius: 50%;
  height: 34px;
  padding-left: 11px;
  padding-top: 5px;
  margin: 4px;
}

.footer-table-center .paging-number .active {
  background-color: #01b075;
  color: #ffffff !important;
}

.btn-paging-first,
.btn-paging-last,
.btn-paging-next,
.btn-paging-pre {
  color: #6c757d;
}

.btn-paging-first,
.btn-paging-last,
.btn-paging-next,
.btn-paging-pre {
  font-size: 21px;
  font-weight: 600;
}

.footer-table-right {
  text-align: right;
  position: relative;
  right: 30px;
  background: #fff;
}

.alertToggleData {
  position: absolute;
  display: none;
  align-items: center;
  top: 47px;
  right: 15px;
}

.textAlertData {
  margin-right: 20px;
}

.modal-title {
  font-weight: 600;
}
.modal-header .close {
  margin: 0;
  padding: 0;
  height: 20px;
  width: 20px;
  border-radius: 25px;
  background: #4d4f5c;
}
.btn-close {
  position: relative;
  top: -4px;
  color: white;
  font-weight: 100;
}

.modal-header {
  border-bottom: none;
}

.modal-footer {
  border-top: none;
}
.modal-body {
  font-size: 16px;
}

.btn-closeNo {
  background: #ffffff;
  color: #3d3f4e;
  border: 1px solid #0fa655;
  border-radius: 4px;
}
.btn-closeNo:hover {
  background: #f8f8f8;
  color: #3d3f4e;
  border-radius: 4px;
  cursor: pointer;
}
.btn-confirm-delete {
  background: #03ae66;
  color: #ffffff;
  border-radius: 4px;
}
.btn-confirm-delete:hover {
  background: #02bf70;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
}
.btn-confirm {
  margin: 0px 0px 0px 15px;
  padding: 6px 30px 6px 30px;
}
.modal-style {
  cursor: default;
}
.footer-paging {
  position: sticky;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
  display: flex;
}
</style>
