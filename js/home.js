window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = " <th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}     
    <tr>
        <td><img class ="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
        <td>Sanchita</td>
        <td>female</td>
        <td>
            <div class='dept-label'>HR</div>
            <div class='dept-label'>Finance</div>
        </td>
        <td>500000</td>
        <td>2 Nov 2021</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr> 
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}