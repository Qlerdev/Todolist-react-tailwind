function Item(props) {
  const { data, deleteTasks, changeTasks } = props;
  return (
    <div className="flex justify-center items-center my-2">
      <div className="text-center flex items-center justify-between w-full max-w-[450px] p-3 shadow-md border">
        <p className="mx-[10px] text-lg font-semibold">{data.title}</p>
        <div className="flex gap-2">
          <button
            className="p-2 border rounded-[5px] bg-red-500 text-white hover:bg-red-600"
            onClick={() => {
              deleteTasks(data.id);
            }}
          >
            ลบ
          </button>
          <button
            className="p-2 border rounded-[5px] bg-yellow-500 text-white hover:bg-yellow-600"
            onClick={() => {
              changeTasks(data.id);
            }}
          >
            แก้ไข
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
