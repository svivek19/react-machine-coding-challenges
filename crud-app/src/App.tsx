import { useState } from "react";

interface Users {
  name: string;
  age: number;
  isAlive: boolean;
}

function App() {
  const [formData, setFormData] = useState<Users>({
    name: "",
    age: 0,
    isAlive: true,
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [data, setData] = useState<Users[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  }

  function handleDelete(index: number) {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  }

  function handleEdit(index: number) {
    setEditIndex(index);
    setFormData(data[index]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editIndex !== null) {
      const tempData = [...data];
      tempData[editIndex] = formData;
      setData(tempData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({ name: "", age: 0, isAlive: true });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
        />

        <label>Age</label>
        <input
          value={formData.age}
          onChange={handleChange}
          type="number"
          name="age"
        />

        <label>Alive</label>
        <input
          checked={formData.isAlive}
          onChange={handleChange}
          type="checkbox"
          name="isAlive"
        />

        <button type="submit">
          {editIndex === null ? "Submit" : "update"}
        </button>
      </form>

      {data.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Alive: {user.isAlive ? "Yes" : "No"}</p>
          <button onClick={() => handleEdit(index)}>edit</button>
          &nbsp;
          <button onClick={() => handleDelete(index)}>delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
