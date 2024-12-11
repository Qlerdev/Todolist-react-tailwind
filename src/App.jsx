import { useState, useEffect } from "react";
import "./App.css";
import AddFrom from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []); //ถ้าหากเคยบันทึกข้อมูล ข้อมูลก็จะอยู่ใน localStorage ถ้าไม่ก็จะอยู่ใน [] แปลงเป็น json ก่อน
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");

  // รูปแบบที่ 1 ถ้ามีการเปลี่ยนแปลงค่าใน state ทุกๆตัวจะมีการใช้งาน useEffect ทุกครั้ง
  // useEffect(() => {
  //   console.log("เรียกใช้งาน useEffect ใน App browser");
  // });

  // รูปแบบที่ 2 เมื่อมีการรัน App ขึ้นมาจะมีการใช้ useEffect แค่ครั้งเดียว
  // useEffect(() => {
  //   console.log("เรียกใช้งาน useEffect ใน App browser");
  // }, []);

  //รูปแบบที่ 3 มีการดักจับ effect ที่จะเกิดขึ้นใน state ที่กำหนด เช่น state tasks ถ้ามีการเปลี่ยนแปลงจะใช้ useEffect นี้
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); //ถ้ามีอะไรเกิดขึ้นใน tasks เช่น add update delete จะทำให้เกิด useEffect ซึ่งจะทำการบันทึกข้อมูลทุกอย่าง

  //การเก็บข้อมูลลง localstorage

  function deleteTasks(data) {
    setTasks(tasks.filter((task) => task.id != data));
  }
  function saveTasks(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล"); //user ไม่ได้กรอกข้อมูลลง input
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        //รายการใดมีรหัสตรงกับรหัสแก้ไข ให้เปลี่ยนแปลง property title
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      }); //การเข้าถึงสมาชิกแต่ละตัวใน task และมีการดึงมาใส่ในตัวแปร item
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
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
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="mx-auto border rounded-lg  mt-[40px] min-h-screen">
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
