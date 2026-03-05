import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StatusCards from "./components/StatusCards";
import TaskStatus from "./components/TaskStatus";
import TicketCard from "./components/TicketCard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    const ticketsFetch = async () => {
      const res = await fetch("/tickets_data.json");
      const data = await res.json();
      // console.log("Fetched tickets:", data);
      setTickets(data);
    };

    ticketsFetch();
  }, []);

  const handleAddTask = (ticket) => {
    if (tasks.find((t) => t.id === ticket.id)) {
      toast.warning("Ticket already added!");
      return;
    }

    setTasks([...tasks, ticket]);
    toast.success("Added to Task Status!");
  };

  const handleComplete = (ticket) => {
    setTasks(tasks.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success("Task Completed!");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <StatusCards inProgress={tasks.length} resolved={resolved.length} />
        <div className="container mx-auto px-4 py-2 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex items-center justify-between">
            <h1 className="text-gray-800 text-2xl font-semibold">
              Customer Tickets
            </h1>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Task Status</h2>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-4 grid md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2 grid  md:grid-cols-1 gap-5 order-2 md:order-1">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                handleAddTask={handleAddTask}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="order-1 md:order-2">
            <TaskStatus
            tasks={tasks}
            handleComplete={handleComplete}
            resolved={resolved}
          />
          </div>
        </div>
        <ToastContainer position="top-right" />

        <Footer />
      </div>
    </>
  );
}

export default App;
