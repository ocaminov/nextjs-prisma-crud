import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //obteniendo datos de la base de datos, se usa si el backend y el frontend no estan en el mismo proyecto
  return await prisma.task.findMany();

  //haciendo un fetch
  /*const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  console.log(data)*/
}

export const dynamic = 'force-dynamic';

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container px-5">
      <div className="grid grid-cols-3 gap-3 mt-10">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
    </section>
  );
}

export default HomePage;
