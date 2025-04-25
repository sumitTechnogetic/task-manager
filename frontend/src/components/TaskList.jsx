import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, fetchTasks }) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-[#2563eb] font-lato">No tasks yet. Start adding!</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;

