function Item({ data, deleteTasks, editTask }) {
  return (
    <div className="flex items-center justify-around p-3 hover:bg-gray-100 rounded-lg shadow-sm">
      <span className="text-lg font-medium text-gray-700">{data.title}</span>
      <div>
        <button onClick={() => editTask(data.id)} className="bg-yellow-500 text-white w-[80px] h-[40px] rounded-lg text-center hover:bg-yellow-600 transition duration-200 mx-3">
          แก้ไข
        </button>
        <button onClick={() => deleteTasks(data.id)} className="bg-red-500 text-white w-[80px] h-[40px] rounded-lg text-center hover:bg-red-600 transition duration-200">
          ลบ
        </button>
      </div>
    </div>
  );
}

export default Item;
