const TaskStatus = ({ tasks, handleComplete }) => {
  return (
    <div className="bg-gray-50">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Task Status</h2>

      {tasks.length === 0 && (
        <p className="text-gray-800">Select a ticket to add to Task Status.</p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-3 rounded mb-3 shadow">
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <button
            onClick={() => handleComplete(task)}
            className="btn btn-sm bg-green-600 border border-none text-white mt-2 w-full"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
