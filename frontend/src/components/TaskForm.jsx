import { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) 
      return
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/tasks`, { title });
    setTitle('');
    fetchTasks();
  };
  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What's your next task?"
        className="flex-1 border-2 border-[#aad097] rounded-l-full px-5 py-3 focus:outline-none font-lato text-[#1e3a8a]"
      />
      <button className="bg-[#5aa336] hover:bg-[#469d2f] transition-all px-5 py-3 rounded-r-full text-white flex items-center">
        <FiPlus size={20} className="mr-2" /> Add
      </button>
    </form>
    </>
  );
}
export default TaskForm;
