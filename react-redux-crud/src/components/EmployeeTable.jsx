import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, editEmployee } from "../redux/employeeCrudSlice";

function EmployeeTable({ setEmp, setEdit }) {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);

  function handleEdit(emp) {
    setEmp(emp);
    setEdit(true);
  }

  function handleDelete(id) {
    dispatch(deleteEmployee(id));
  }

  return (
    <div>
      <h1>Employee Database</h1>

      {employee.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.department}</td>
                <td>
                  <button onClick={() => handleEdit(emp)}>Edit</button>
                  <button onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeTable;
