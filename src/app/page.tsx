import Image from "next/image";
import City from "./components/City";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700">nextjs13</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <City />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
