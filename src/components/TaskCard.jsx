"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
      <h3
        className="font-bold text-2xl mb-2"
        onClick={() => {
          router.push("/tasks/edit/" + task.id);
        }}
      >
        {task.title}
      </h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;