import { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import { useDispatch } from "react-redux";
import { addEmployee, editEmployee } from "./redux/employeeCrudSlice";

function App() {
  const [edit, setEdit] = useState(false);
  const [employee, setEmployee] = useState({
    id: Date.now(),
    name: "",
    age: "",
    department: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  function handleSubmit() {
    if (edit) {
      dispatch(editEmployee(employee));
      setEdit(false);
    } else {
      dispatch(addEmployee({ ...employee, id: Date.now() }));
    }

    setEmployee({
      name: "",
      age: "",
      department: "",
    });
  }

  return (
    <>
      <div className="form-container">
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="employee name"
        />
        <input
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
          placeholder="employee age"
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="employee department"
        />

        <button onClick={handleSubmit}>
          {edit ? "Update" : "Add"} Employee
        </button>
      </div>

      <EmployeeTable setEmp={setEmployee} setEdit={setEdit} />
    </>
  );
}

export default App;
