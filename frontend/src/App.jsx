import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import axios from 'axios';
import Loader from './components/Loader.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tasks`);
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-[url(https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525)] p-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 transition-all">
        <h1 className="text-4xl font-poppins font-bold text-[#1e3a8a] text-center mb-6">
          Task Manager
        </h1>
        <TaskForm fetchTasks={fetchTasks} />
        {loading ? <Loader /> : <TaskList tasks={tasks} fetchTasks={fetchTasks} />}
      </div>
    </div>
  );
}

export default App;

