import { FaTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";

function Item({ data, deleteTasks, editTask }) {
  return (
    <div className="task-buttons cursor-pointer">
      <span className="task-text">{data.title}</span>
      <div>
        <button onClick={() => editTask(data.id)} className="bg-yellow-500 text-white rounded-lg text-center ">
          <BiSolidEdit />
        </button>
        <button onClick={() => deleteTasks(data.id)} className="bg-red-500 text-white   rounded-lg text-center ">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Item;
