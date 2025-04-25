import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import axios from 'axios';
import Loader from './components/Loader.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'completed', 'incomplete'];

  const fetchTasks = async () => {
    setLoading(true);
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tasks`);
    setTasks(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });
  return (
    <div className="min-h-screen flex items-center justify-center  bg-[url(https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525)] p-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 transition-all">
        <h1 className="text-4xl font-poppins font-bold text-[#1e3a8a] text-center mb-6">
          Task Manager
        </h1>
        <div className="flex justify-center mb-6 space-x-3">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-lato transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 ${
                filter === f
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-[#aad097] text-[#1e3a8a]'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <TaskForm fetchTasks={fetchTasks} />
        {loading ? <Loader /> : <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} />}
      </div>
    </div>
  );
}
export default App;
