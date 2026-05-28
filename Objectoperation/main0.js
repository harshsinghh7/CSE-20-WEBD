const employees = [];

const result = document.getElementById("result");

document.getElementById("addBtn")
    .addEventListener("click", addEmployee);

document.getElementById("displayBtn")
    .addEventListener("click", displayEmployees);

document.getElementById("filterBtn")
    .addEventListener("click", filterSalary);

document.getElementById("totalBtn")
    .addEventListener("click", totalSalary);

document.getElementById("averageBtn")
    .addEventListener("click", averageSalary);

document.getElementById("countBtn")
    .addEventListener("click", countDepartment);

function addEmployee() {

    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("empId").value.trim();
    const salary = Number(document.getElementById("salary").value);
    const dept = document.getElementById("dept").value.trim();

    if (!name || !id || !salary || !dept) {
        alert("Please fill all fields");
        return;
    }

    employees.push({
        name,
        id,
        salary,
        department: dept
    });

    alert("Employee Added Successfully");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {

    if (employees.length === 0) {
        result.innerHTML = "No employees found";
        return;
    }

    result.innerHTML = employees
        .map(emp =>
            `${emp.name} | ${emp.id} | ${emp.salary} | ${emp.department}`
        )
        .join("<br>");
}

function filterSalary() {

    const filtered =
        employees.filter(emp => emp.salary > 50000);

    result.innerHTML = filtered.length
        ? filtered
            .map(emp =>
                `${emp.name} | ₹${emp.salary}`
            )
            .join("<br>")
        : "No employees above ₹50,000";
}

function getTotalSalary() {

    return employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );
}

function totalSalary() {

    result.textContent =
        `Total Salary = ₹${getTotalSalary()}`;
}

function averageSalary() {

    if (employees.length === 0) {
        result.textContent =
            "No employees available";
        return;
    }

    const average =
        getTotalSalary() / employees.length;

    result.textContent =
        `Average Salary = ₹${average.toFixed(2)}`;
}

function countDepartment() {

    const dept =
        prompt("Enter Department Name");

    if (!dept) return;

    const count =
        employees.filter(emp =>
            emp.department.toLowerCase() ===
            dept.toLowerCase()
        ).length;

    result.textContent =
        `Employees in ${dept} = ${count}`;
}