// const TicketCard = ({ ticket, handleAddTask }) => {
//   return (
//     <div className="card bg-base-100 shadow">
//       <div className="card-body">
//         <h2 className="card-title">{ticket.title}</h2>
//         <p>{ticket.description}</p>

//         <div className="text-sm mt-2">
//           <p><b>Customer:</b> {ticket.customer}</p>
//           <p><b>Priority:</b> {ticket.priority}</p>
//           <p><b>Date:</b> {ticket.createdAt}</p>
//         </div>

//         <div className="card-actions justify-end mt-4">
//           <button
//             onClick={() => handleAddTask(ticket)}
//             className="btn btn-sm btn-success"
//           >
//             Add Task
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketCard;

import React from "react";
import { FiCalendar } from "react-icons/fi";

const TicketCard = ({ ticket, handleAddTask }) => {
  const getPriorityStyle = () => {
    switch (ticket.priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusStyle = () => {
    switch (ticket.status) {
      case "Open":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div
      onClick={() => handleAddTask(ticket)}
      className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {ticket.title}
        </h2>

        <span
          className={`px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 w-fit ${getStatusStyle()}`}
        >
          <span className="w-2 h-2 bg-current rounded-full"></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
        {ticket.description}
      </p>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4 text-sm">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-gray-500">#{ticket.id}</span>

          <span className={`font-semibold uppercase ${getPriorityStyle()}`}>
            {ticket.priority} Priority
          </span>
        </div>

        <div className="flex items-center gap-6 text-gray-500">
          <span>{ticket.customer}</span>

          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
