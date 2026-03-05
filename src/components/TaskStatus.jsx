const TaskStatus = ({ tasks, handleComplete, resolved }) => {
  return (
    <div className="bg-gray-100">
     

      {tasks.length === 0 ? (
        <p className="text-gray-800">Select a ticket to add to Task Status.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="bg-white p-3 rounded mb-3 shadow">
            <h3 className="font-semibold text-gray-800">{task.title}</h3>

            <button
              onClick={() => handleComplete(task)}
              className="btn btn-sm bg-green-600 border-none text-white mt-2 w-full"
            >
              Complete
            </button>
          </div>
        ))
      )}

      <h2 className="text-xl font-bold mb-2 text-gray-800">Resolved Tasks</h2>
      {resolved.length === 0 && (
        <p className="text-gray-800">No resolved tasks yet.</p>
      )}
      {resolved.map((task) => (
        <div key={task.id} className="bg-blue-100 p-3 rounded mb-3 shadow">
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
