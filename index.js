const employee = {
    name : "Daniel",
    streetAdress : "1234 Happy Lane"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
const employeeTwo = updateEmployeeWithKeyAndValue(employee, 'name', 'Ashley');
employeeTwo;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Joshua');
destructivelyUpdatedEmployee;

function deleteFromEmployeeByKey(employee, key) {
    const safeDeletedEmployee = {...employee};
    delete safeDeletedEmployee.name;
    return safeDeletedEmployee;
}
const newEmployee = deleteFromEmployeeByKey(employee, 'name');
newEmployee;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}   
const newEmployeeTwo = destructivelyDeleteFromEmployeeByKey(employee, 'name');
newEmployeeTwo;