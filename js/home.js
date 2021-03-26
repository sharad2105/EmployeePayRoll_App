let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;

    createInnerHtml();
    localStorage.removeItem("editEmp");
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml =
        "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml} `;
    for (const employeePayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
     <tr>
  <td><img class="profile" alt="" src="${
    employeePayrollData._profilePic
  }"></td>
  <td>${employeePayrollData._name}</td>
  <td>${employeePayrollData._gender}</td>
  <td>${getDeptHtml(employeePayrollData._department)}</td>
  <td>${employeePayrollData._salary}</td>
  <td>${employeePayrollData._startDate}</td>
  <td>
      <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete"
          src="../assets/icons/delete-black-18dp.svg">
      <img id="${employeePayrollData._id}" alt="edit" onclick="update(this)"
          src="../assets/icons/create-black-18dp.svg">
  </td>
</tr>
`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
};

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: "Shubham Sawant",
            _gender: "Male",
            _department: ["HR", "sales"],
            _salary: "500000",
            _startDate: "21 Sep 2019",
            _id: new Date().getTime(),
            _profilePic: "../assets/profile-images/Ellipse -8.png",
        },
        {
            _name: "Hitendra Mali",
            _gender: "Male",
            _department: ["HR", "Finance"],
            _salary: "700000",
            _startDate: "20 Dec 2019",
            _id: new Date().getTime(),
            _profilePic: "../assets/profile-images/Ellipse -7.png",
        },
    ];
    return empPayrollListLocal;
}