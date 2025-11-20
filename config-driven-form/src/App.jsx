import DynamicForm from "./DynamicForm";
import loginFormConfig from "./formConfig";

console.log(loginFormConfig);

function App() {
  return (
    <div>
      <h1>Config driven form</h1>
      <DynamicForm config={loginFormConfig} />
    </div>
  );
}

export default App;
