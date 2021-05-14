<style scoped>
.isHide {
  display: none;
}
.m-dialog {
  z-index: 999;
}

.dialog-header {
  position: relative;
  padding-left: 32px;
  padding-top: 20px;
  display: flex;
  font-size: 23px;
}

.dialog-header-title {
  font-family: "MISA-Bold";
  font-size: 24px;
  color: #111;
  font-weight: 700;
}

.dialog-header-close {
  position: absolute;
  right: 12px;
  top: 12px;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: inherit;
}

.dialog-content {
  position: fixed;
  width: 900px;
  background-color: #fff;
  left: calc(50% - 450px);
  top: calc(50% - 314px);
  z-index: inherit;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 10%);
}

.dialog-content .divide {
  width: 836px;
  border-top: 1px solid #e0e0e0;
  position: relative;
  left: 32px;
}
.dialog-body {
  padding: 0px 32px 53px 32px;
  font-family: "MISA-SemiBold";
}
.dialog-footer {
  width: 100%;
  height: 77px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 20px 32px;
  box-sizing: border-box;
}
.avatar-note {
  font-size: 12px;
  text-align: center;
}
.avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(/assets/img/default-avatar.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
}
.label-required {
  color: red;
}
.label-input {
  margin-bottom: 0px;
  margin-top: 1rem;
}
.hr-group-label {
  margin: 0px;
}
.btn-save-form {
  background-color: #01b075;
  color: white;
  margin-left: 15px;
}
.input-warning {
  border-color: red !important;
}
.alertToggle {
  display: none;
  align-items: center;
  float: right;
  right: 16px;
  top: -22px;
}
.textAlert {
  margin-right: 20px;
}
.cb-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid #afafaf;
}
.checkbox-input-form {
  display: flex;
  align-items: center;
  padding: 0px 1.5rem 0px 1.5rem;
}
.checkbox-input-form span {
  font-size: 13px;
  padding-left: 10px;
}

.icon.icon-close {
  width: 24px;
  height: 24px;
  background: url("../../../assets/img/Sprites.64af8f61.svg") no-repeat -144px -144px;
}

.icon.icon-help {
  margin-right: 6px;
  width: 24px;
  height: 24px;
  background: url("../../../assets/img/Sprites.64af8f61.svg") no-repeat -89px -144px;
}

.dialog-body .col-5,
.dialog-body .col-7,
.dialog-body .col,
.dialog-body .col-3 {
  padding-right: 3px;
  padding-left: 3px;
}

.dialog-body .avatar-employee {
  padding-left: 27px;
  padding-right: 35px;
}
.contain-radio-gender {
  height: 38px;
  display: flex;
  padding-left: 10px;
}

.contain-radio-gender input {
  height: 18px;
  width: 18px;
}
.form-control {
  font-size: 13px !important;
  font-family: "MISA-Regular";
}
.dialog-footer-left {
  float: left;
}
.dialog-footer-right {
  float: right;
}
.btn-detail-dialog {
  height: 36px;
  border: 1px solid #8d9096;
  color: #111;
  background-color: transparent;
  border-radius: 3px;
  font-size: 13px;
  padding: 8px 20px;
  background: #fff;
}
.btn-detail-dialog:hover {
  background: #d8d9db;
}
.second-right-button {
  font-family: "MISA-Bold";
  color: #fff;
  background: #248b15;
}
.second-right-button:hover {
  background: #35bf22;
  color: #fff;
}
.form-input-employee {
  padding-right: 26px;
}
</style>
<template>
  <div>
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: isHide }"
    >
      <div class="dialog-modal"></div>
      <div class="alert alert-danger alertToggle" id="alert">
        <span class="textAlert">data was saved</span>
        <a href="#" class="close" data-dismiss="alert">&times;</a>
      </div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">Thông tin nhân viên</div>
          <div class="checkbox-input-form">
            <input type="checkbox" class="cb-checkbox" />
            <span>Là khách hàng</span>
          </div>
          <div class="checkbox-input-form">
            <input type="checkbox" class="cb-checkbox" />
            <span>Là nhà cung cấp</span>
          </div>
          <div class="dialog-header-close">
            <button type="button" class="close" v-on:click="btnCancelOnClick">
              <div class="icon icon-close"></div>
            </button>
            <button type="button" class="close">
              <div class="icon icon-help"></div>
            </button>
          </div>
        </div>
        <div class="dialog-body">
          <div class="row">
            <div class="col-6 avatar-employee">
              <div class="row">
                <div class="col-5">
                  <label class="label-input">
                    Mã <span class="label-required">*</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtEmployeeCode"
                      fieldName="EmployeeCode"
                      required
                      class="form-control require-not-null"
                      type="text"
                      v-model="employee.EmployeeCode"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-7">
                  <label class="label-input">
                    Tên <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtFullName"
                      fieldName="FullName"
                      class="form-control require-not-null"
                      type="text"
                      required
                      v-model="employee.EmployeeName"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">
                    Đơn vị <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <select
                      id="cbnDepartment"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control require-not-null"
                      v-model="employee.DepartmentId"
                    >
                      <option
                        v-for="department in departments"
                        :key="department.DepartmentId"
                        :value="department.DepartmentId"
                      >
                        {{ department.DepartmentName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input"> Chức danh </label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="txtPositionName"
                      fieldName="text"
                      type="text"
                      required
                      v-model="employee.EmployeePosition"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 form-input-employee">
              <div class="row">
                <div class="col-5">
                  <label class="label-input">Ngày sinh</label>
                  <div class="input-group">
                    <input
                      id="dtDateOfBirth"
                      class="form-control"
                      type="date"
                      v-model="employee.DateOfBirth"
                      min="1900-01-01"
                    />
                  </div>
                </div>
                <div class="col-7">
                  <label class="label-input"> Giới tính </label>
                  <div class="contain-radio-gender">
                    <div class="input-group">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="rd-gender"
                          type="radio"
                          id="rd-male"
                          value="1"
                          :checked="employee.gender === 1"
                        />
                        <label class="form-check-label">Nam</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="rd-gender"
                          type="radio"
                          id="rd-female"
                          value="0"
                          :checked="employee.gender === 0"
                        />
                        <label class="form-check-label">Nữ</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="rd-gender"
                          type="radio"
                          id="rd-other"
                          value="2"
                          :checked="employee.gender === 2"
                        />
                        <label class="form-check-label">Khác</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-7">
                  <label class="label-input"> Số CMND </label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="txtIdentityNumber"
                      fieldName="text"
                      type="text"
                      required
                      v-model="employee.IdentityNumber"
                    />
                  </div>
                </div>
                <div class="col-5">
                  <label class="label-input">Ngày cấp</label>
                  <div class="input-group">
                    <input
                      id="dtDateOfBirth"
                      class="form-control"
                      type="date"
                      v-model="employee.IdentityDate"
                      min="1900-01-01"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">Nơi cấp</label>
                  <div class="input-group">
                    <input
                      id="txtIdentityPlace"
                      fieldName="PhoneNumber"
                      class="form-control"
                      type="text"
                      v-model="employee.IdentityPlace"
                    />
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                <div class="col">
                  <label class="label-input">
                    Email <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      class="form-control require-not-null"
                      id="txtEmail"
                      fieldName="Email"
                      type="email"
                      required
                      placeholder="example@domain.com"
                      v-model="employee.Email"
                    />
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">
                    Số điện thoại <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtPhoneNumber"
                      fieldName="FullName"
                      class="form-control require-not-null"
                      type="text"
                      required
                      v-model="employee.PhoneNumber"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label class="label-input">Vị trí</label>
                  <div class="input-group">
                    <select
                      id="cbxPosition"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.PositionId"
                    >
                      <option
                        v-for="position in positions"
                        :key="position.PositionId"
                        :value="position.PositionId"
                      >
                        {{ position.PositionName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Phòng ban</label>
                  <div class="input-group">
                    <select
                      id="cbnDepartment"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.DepartmentId"
                    >
                      <option
                        v-for="department in departments"
                        :key="department.DepartmentId"
                        :value="department.DepartmentId"
                      >
                        {{ department.DepartmentName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">Mức lương cơ bản</label>
                  <div class="input-group">
                    <currency-input
                      class="form-control"
                      id="txtSalary"
                      fieldName="Salary"
                      type="text"
                      style="border-right: none"
                      v-model="employee.Salary"
                      currency="VND"
                      locale="de"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text"
                        style="border-left: none; background: white"
                        >(VNĐ)</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Tình trạng công việc</label>
                  <div class="input-group">
                    <select
                      id="cboWorkStatus"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.WorkStatus"
                    >
                      <option value="0" selected>Đã nghỉ việc</option>
                      <option value="1">Thực tập sinh</option>
                      <option value="2">Đang thử việc</option>
                      <option value="3">Nhân viên</option>
                    </select>
                  </div>
                </div>
              </div> -->
            </div>
          </div>

          <div class="row" style="padding-top: 13px">
            <div class="col-12">
              <label class="label-input"> Địa chỉ </label>
              <div class="input-group">
                <input
                  id="txtAddress"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.Address"
                />
              </div>
            </div>
          </div>
          <div class="row" style="padding-left: 13px">
            <div class="col-3">
              <label class="label-input"> ĐT di động </label>
              <div class="input-group">
                <input
                  id="txtPhoneNumber"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.PhoneNumber"
                />
              </div>
            </div>
            <div class="col-3">
              <label class="label-input"> ĐT cố định </label>
              <div class="input-group">
                <input
                  id="txtCellPhone"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.TelephoneNumber"
                />
              </div>
            </div>
            <div class="col-3">
              <label class="label-input"> Email </label>
              <div class="input-group">
                <input
                  class="form-control"
                  id="txtEmail"
                  fieldName="Email"
                  type="email"
                  required
                  placeholder="example@domain.com"
                  v-model="employee.Email"
                />
              </div>
            </div>
          </div>
          <div class="row" style="padding-left: 13px">
            <div class="col-3">
              <label class="label-input"> Tài khoản ngân hàng </label>
              <div class="input-group">
                <input
                  id="txtBankNumber"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.BankAccountNumber"
                />
              </div>
            </div>
            <div class="col-3">
              <label class="label-input"> Tên ngân hàng </label>
              <div class="input-group">
                <input
                  id="txtBackName"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.BankName"
                />
              </div>
            </div>
            <div class="col-3">
              <label class="label-input"> Chi nhánh </label>
              <div class="input-group">
                <input
                  id="txtBankBranch"
                  fieldName="FullName"
                  class="form-control"
                  type="text"
                  required
                  v-model="employee.BankBranchName"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="divide"></div>
        <div class="dialog-footer">
          <div class="dialog-footer-left">
            <button
              id="btnCancel"
              class="btn btn-default btn-detail-dialog"
              v-on:click="btnCancelOnClick"
            >
              Huỷ
            </button>
          </div>
          <div class="dialog-footer-right">
            <button
              id="btnSave"
              @click="saveEmployee"
              class="btn btn-save-form btn-detail-dialog"
            >
              <i class="far fa-save"></i><span class="btn-text">Cất</span>
            </button>
            <button
              id="btnSave"
              @click="saveEmployee"
              class="btn btn-save-form btn-detail-dialog btn second-right-button"
            >
              <i class="far fa-save"></i
              ><span class="btn-text">Cất và thêm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
import $ from "jquery";
export default {
  props: {
    isHide: Boolean,
    employee: Object,
    initEmployee: Function,
    showAlertData: Function,
    requestStatus: Number,
    departments: Array,
    positions: Array,
  },
  methods: {
    // sự kiện đóng dialog input form
    btnCancelOnClick() {
      this.$emit("closePopup", true); //đóng dialog
      removeWarningEmpty(); // bỏ cảnh báo field input
    },

    // tạo mới hoặc sửa thông tin nhân viên
    async saveEmployee() {
      var count = countEmpty(); // đếm số input bắt buộc không hợp lệ
      if (count === 0) {
        this.$emit("closePopup", true); //đóng dialog
        this.employee.DateOfBirth = validateDate(this.employee.DateOfBirth); // validate theo maxdate and mindate
        if (this.requestStatus == 0) {
          //0: thêm mới nhân viên
          const response = await axios.post(
            "https://localhost:44325/api/v1/Employees",
            this.employee
          );
          console.log(response);
          this.showAlertData("Thêm mới nhân viên thành công");
        } else {
          // sửa nhân viên
          const response = await axios.put(
            "https://localhost:44325/api/v1/Employees/" +
              this.employee.EmployeeId,
            this.employee
          );
          console.log(response);
          this.showAlertData("Sử thông tin mô nhân viên thành công");
        }
        await this.initEmployee(); // cập nhật lại dự liệu
      } else {
        warningEmpty(); // cảnh báo các field input chưa hợp lệ
        showAlert("Vui lòng điền đẩy đủ thông tin quan trọng!");
      }
    },
  },

  data() {
    return {};
  },
};

$(document).ready(function () {
  // set max date in datetimePicker
  $("#dtDateOfBirth").prop("max", getMaxDate());

  // check input hợp lệ với sự kiện khi tab hoặc click ra khỏi field input
  $(document).on("blur", "#txtFullName", function () {
    // họ tên
    if (!$(this).val()) {
      $(this).addClass("input-warning");
      showAlert("Vui lòng điền họ tên!");
    } else {
      $(this).removeClass("input-warning");
    }
  });
  $(document).on("blur", "#txtEmail", function () {
    // email
    if (isEmailValidate($(this).val())) {
      $(this).removeClass("input-warning");
    } else {
      $(this).addClass("input-warning");
      showAlert("Vui lòng điền Email hợp lệ!");
    }
  });
  $(document).on("blur", "#txtPhoneNumber", function () {
    // số điện thoại
    if (isPhoneNumberValidate($(this).val())) {
      $(this).removeClass("input-warning");
    } else {
      $(this).addClass("input-warning");
      showAlert("Vui lòng điền số điện thoại hợp lệ!");
    }
  });
  $(document).on("blur", "#txtIdentityNumber", function () {
    // số cmnd, cccd
    if (isIdentityNumberValidate($(this).val())) {
      $(this).removeClass("input-warning");
    } else {
      $(this).addClass("input-warning");
      showAlert("Vui lòng điền số CMND không hợp lệ!");
    }
  });
  $(document).on("blur", "#dtDateOfBirth", function () {
    // ngày sinh
    const a = validateDate($(this).val());
    $(this).val(a); //nếu cố tình nhập thời gian vượt quá khoảng min max thì set lại giá trị min hoặc max
  });
  // $(document).on("blur", "#txtSalary", function () {
  //   let format = parseFloat(this.value.replace(/,/g, ""))
  //     .toString()
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   $(this).val(format);
  // });
});

// regex
const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNo = /^\d{10}$/;
const IdenNo = /^\d{9,12}$/;

// đếm field input trống và dữ liệu không hợp lệ
function countEmpty() {
  let count = 0;
  $(document)
    .find(".require-not-null")
    .each(function () {
      if (!$(this).val()) {
        count++;
      }
    });
  if (!isEmailValidate($("#txtEmail").val())) {
    count++;
  }
  if (!isPhoneNumberValidate($("#txtPhoneNumber").val())) {
    count++;
  }
  if (!isIdentityNumberValidate($("#txtIdentityNumber").val())) {
    count++;
  }
  return count;
}

// cảnh báo các field input trống
function warningEmpty() {
  $(".dialog-detail")
    .find(".require-not-null")
    .each(function () {
      if (!$(this).val()) {
        $(this).addClass("input-warning");
      }
    });
}

// xóa cảnh báo các field input trống
function removeWarningEmpty() {
  $(document).find(".input-warning").removeClass("input-warning");
}

// kiểm tra email hợp lệ
function isEmailValidate(email) {
  if (!emailRe.test(email)) {
    return false;
  } else {
    return true;
  }
}

// kiểm tra số điện thoại hợp lệ
function isPhoneNumberValidate(phone) {
  if (!phoneNo.test(phone)) {
    return false;
  } else {
    return true;
  }
}

// kiểm tra số cmnd hợp lệ
function isIdentityNumberValidate(Identity) {
  if (!IdenNo.test(Identity)) {
    return false;
  } else {
    return true;
  }
}

// hiện alert thông báo
function showAlert(alert) {
  $(".textAlert").text(alert);
  $(".alertToggle").css("display", "flex").delay(2000).fadeOut("slow");
}

// validate range date
function validateDate(date) {
  return date < $("#dtDateOfBirth").prop("min")
    ? $("#dtDateOfBirth").prop("min")
    : date > getMaxDate()
    ? getMaxDate()
    : date;
}

// lấy ngày hiện tại
function getMaxDate() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dateNow =
    date.getFullYear() +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;

  return dateNow;
}
</script>
