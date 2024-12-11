function AddForm(props) {
  const { title, setTitle, saveTasks, editId } = props;
  return (
    <>
      <h2 className="text-[32px] text-center font-bold">แอพบริหารจัดการงาน</h2>
      <form action="" className="flex justify-center mt-[20px]" onSubmit={saveTasks}>
        <div className="flex w-full max-w-[500px] mx-auto">
          <input
            value={title}
            type="text"
            className="border-2 rounded-l-[5px] focus:outline-none px-4 w-full box-border h-10 text-sm leading-none appearance-none"
            placeholder="กรอกข้อความ..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            maxLength={50}
          />
          <button type="submit" className="px-4 bg-blue-500 rounded-r-[5px] text-white font-bold cursor-pointer box-border h-[40px] text-sm leading-none">
            {editId ? "update" : "add"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
