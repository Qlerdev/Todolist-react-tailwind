function AddForm(props) {
  const { tasks, setTasks } = props;

  function saveTasks(e) {
    e.preventDefault();
    const newTasks = {
      task: task,
    };
    setTasks(...tasks, newTasks);
  }
  return (
    <>
      <h2 className="text-[32px] text-center font-bold">แอพบริหารจัดการงาน</h2>
      <form action="" className="flex justify-center mt-[20px]" onSubmit={saveTasks}>
        <div className="flex w-full max-w-[500px] mx-auto">
          <input
            type="text"
            className="border-2 rounded-l-[5px] focus:outline-none py-1 px-2 w-full"
            placeholder="กรอกข้อความ..."
            onChange={(e) => {
              setTasks(e.value.target);
            }}
          />
          <button type="submit" className="px-4 py-1 bg-blue-500 rounded-r-[5px] text-white font-bold cursor-pointer">
            เพิ่ม
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
