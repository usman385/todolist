import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onAdd }) => {
  return (
    <div className="flex flex-col border-2 border-zinc-800">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
