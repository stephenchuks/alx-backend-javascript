export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  function* iterator() {
    while (currentDepartmentIndex < departments.length) {
      const currentDepartment = departments[currentDepartmentIndex];
      if (currentEmployeeIndex < currentDepartment.length) {
        yield currentDepartment[currentEmployeeIndex];
        currentEmployeeIndex++;
      } else {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }
    }
  }

  return iterator();
}

