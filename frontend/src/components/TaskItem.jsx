import axios from 'axios';
import { FiTrash2, FiCheckCircle } from 'react-icons/fi';

function TaskItem({ task, fetchTasks }) {
  const handleComplete = async () => {
    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/tasks/${task._id}`);
    fetchTasks();
  };

  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div className="flex justify-between items-center p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition-all">
      <p className={`font-lato text-lg ${task.completed ? 'line-through text-gray-400' : 'text-[#1e3a8a]'}`}>
        {task.title}
      </p>
      <div className="flex items-center space-x-3">
        {!task.completed && (
          <button onClick={handleComplete} className="text-[#5aa336] hover:text-[#469d2f] transition-all">
            <FiCheckCircle size={24} />
          </button>
        )}
        <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition-all">
          <FiTrash2 size={24} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
