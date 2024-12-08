// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import AddFrom from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  function deleteTasks(data) {
    setTasks(tasks.filter((task) => task.id != data));
  }
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App ">
      <Header />
      <div className="container mx-auto py-[20px] border rounded-lg  mt-[40px] shadow-lg">
        <AddFrom />
        <section className="mt-6">
          {tasks.map((data) => {
            return <Item key={data.id} data={data} deleteTasks={deleteTasks} tasks={tasks} setTasks={setTasks} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
