<template>
  <div class="content">
    <BaseLoading :showLoading="isLoading" />
    <div class="content-header">
      <div class="content-header-left">
        <span class="menu-item-selected">Danh sách nhân viên</span>
      </div>
      <div class="content-header-right">
        <a
          class="btn btn-primary btn-add-employee"
          href="#"
          role="button"
          v-on:click="btnAddOnClick"
        >
          <div class="icon icon-add-employee"></div>
          <div class="item-name">Thêm nhân viên</div>
        </a>

        <div class="alert alert-success alertToggleData" id="alert">
          <span class="textAlertData">data was saved</span>
          <a href="#" class="close" data-dismiss="alert">&times;</a>
        </div>
      </div>
    </div>
    <div class="customer-filter">
      <div class="customer-filter-left">
        <div class="input-group input-filter">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <div class="icon icon-search"></div>
            </span>
          </div>
          <input
            type="text"
            class="form-control inputbox-filter"
            placeholder="Tìm kiếm nhân viên"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-on:keyup.13="filterInput($event)"
          />
        </div>
        <div class="select-filter-department">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle btn-select btn-list-department"
              type="button"
              id="dropdownMenuButtonDepartment"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tất cả phòng ban
            </button>
            <div
              class="dropdown-menu menu-department"
              aria-labelledby="dropdownMenuButtonDepartment"
            >
              <a
                class="dropdown-item selectDepartment"
                v-for="department in departments"
                :key="department.DepartmentId"
                :id="department.DepartmentId"
                v-on:click="
                  OnClick(department.DepartmentName, department.DepartmentId)
                "
                href="#"
                >{{ department.DepartmentName }}</a
              >
            </div>
          </div>
        </div>
        <div class="select-filter-position">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle btn-select btn-list-position"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tất cả vị trí
            </button>
            <div
              class="dropdown-menu menu-position"
              aria-labelledby="dropdownMenuButton"
            >
              <a
                class="dropdown-item selectPosition"
                v-for="position in positions"
                :key="position.PositionId"
                :id="position.PositionId"
                href="#"
                >{{ position.PositionName }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="customer-filter-right">
        <a class="btn btn-reset-filter" href="#" v-on:click="btnResetTable">
          <div class="icon icon-reset-filter"></div>
        </a>
      </div>
    </div>
    <div class="data-table">
      <table class="table table-striped table-hover" width="100%" border="0">
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Phòng ban</th>
            <th>Mức lương cơ bản</th>
            <th>Tình trạng công việc</th>
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
            <td>{{ employee.FullName }}</td>
            <td>{{ employee.GenderName }}</td>
            <td>{{ employee.DateOfBirth | formatDate }}</td>
            <td style="float: right">{{ employee.PhoneNumber }}</td>
            <td>{{ employee.Email }}</td>
            <td>{{ employee.PositionName }}</td>
            <td>{{ employee.DepartmentName }}</td>
            <td style="float: right">
              {{ employee.Salary | formatSalary }}
            </td>
            <td>{{ statusWordString(employee.WorkStatus) }}</td>
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
      <div class="row">
        <div class="col-sm footer-table-left">
          <span class="text-muted">Hiển thị 1-10/1000 nhân viên</span>
        </div>
        <div class="col-sm footer-table-center">
          <div class="paging-left">
            <a class="btn btn-paging-first" href="#" role="button">
              <font-awesome-icon icon="angle-double-left" />
            </a>
            <a class="btn btn-paging-pre" href="#" role="button">
              <font-awesome-icon icon="angle-left" />
            </a>
          </div>
          <div class="paging-number">
            <a class="btn btn-paging-number-item active" href="#" role="button"
              >1</a
            >
            <a class="btn btn-paging-number-item" href="#" role="button">2</a>
            <a class="btn btn-paging-number-item" href="#" role="button">3</a>
            <a class="btn btn-paging-number-item" href="#" role="button">4</a>
          </div>
          <div class="paging-right">
            <a class="btn btn-paging-next" href="#" role="button">
              <font-awesome-icon icon="angle-right" />
            </a>
            <a class="btn btn-paging-last" href="#" role="button">
              <font-awesome-icon icon="angle-double-right" />
            </a>
          </div>
        </div>
        <div class="col-sm footer-table-right">
          <span class="text-muted">10 nhân viên/trang</span>
        </div>
      </div>
    </footer>
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
        "http://cukcuk.manhnv.net/v1/employees"
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
  height: 50px;
  width: 100%;
  background: #f4f5f6;
}

.btn-select {
  background-color: #ffffff;
}

.content-header-left {
  height: 50px;
  float: left;
  padding-left: 20px;
  display: flex;
  align-items: center;
}

.content-header-left .menu-item-selected {
  font-size: 25px;
  font-weight: bold;
}

.content-header-right {
  height: 50px;
  float: right;
  padding-right: 15px;
  display: flex;
  align-items: center;
}

.content-header-right .btn-add-employee {
  background-color: #01b075;
  display: flex;
  align-items: center;
  border-color: #01b075;
  color: white;
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
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
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
  padding-right: 15px;
}

.customer-filter-right .btn-reset-filter {
  background-color: #ffffff;
  border-color: #bbbbbb;
}

.customer-filter-right .btn-reset-filter .icon-reset-filter {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
}

.customer-filter-right .btn-reset-filter .icon-reset-filter {
  background-image: url("../../../assets/icon/refresh.png");
}

.data-table {
  position: absolute;
  right: 4px;
  left: -2px;
  bottom: 60px;
  top: 100px;
  overflow-y: auto;
}

.data-table th {
  position: sticky;
  top: -1px;
  left: 2px;
  background-color: white;
}

.data-table tr {
  cursor: pointer;
}

.btn-delete-employee {
  padding: 0px 0px 0px 0px;
  margin: -6px 0px -6px 0px;
}

.footer-table {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}

.footer-table .row {
  width: 100% !important;
  margin: 0;
}

.footer-table-left {
  text-align: left;
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
</style>
