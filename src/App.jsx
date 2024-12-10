import { useState } from "react";
import "./App.css";
import AddFrom from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  function deleteTasks(data) {
    setTasks(tasks.filter((task) => task.id != data));
  }
  function saveTasks(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล"); //user ไม่ได้กรอกข้อมูลลง input
    } else {
      //เพิ่มรายการ
      const newTask = {
        id: Math.floor(Math.random() * 1000), //random id ตั้งแต่ 0-999 ปัดทศนิยมลง
        title: title,
      };
      setTasks([...tasks, newTask]); //เอาค่าใหม่ (newTask) ใส่ในค่าเดิม (tasks) ที่มีค่าอยู่
      setTitle("");
    }
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    //เช็คว่ารหัสงานที่ต้องการแก้ไข และก็ไปค้นหาว่าสมาชิกใน state tasks มีสมาชิกเลขใดบ้างที่มีเลขสมาชิกเป็น 1 เหมือนกับรหัสของงานที่ต้องการแก้ไขโดยเก็บลงไป editTask
    setTitle(editTask.title); //เอาชื่อรายการมาแสดงผลที่แบบฟอร์ม
  }
  return (
    <div className="App ">
      <Header />
      <div className="container mx-auto py-[20px] border rounded-lg  mt-[40px] shadow-lg">
        <AddFrom title={title} setTitle={setTitle} saveTasks={saveTasks} editId={editId} />
        <section className="mt-6">
          {tasks.map((data) => {
            return <Item key={data.id} data={data} deleteTasks={deleteTasks} editTask={editTask} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
