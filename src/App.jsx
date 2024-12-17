import { Types, Level } from "./constant";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useQuestionStore from "./store/zustand";
import Animation from "./components/Animation/Animation";

function App() {
  const [type, setType] = useState(Types[0].id);
  const [level, setLevel] = useState(Level[0]);
  const { question } = useQuestionStore();
  const navigate = useNavigate();

  const handleBegin = () => {
    const query = `amount=5&category=${type}&difficulty=${level}&type=multiple`;
    navigate(`/question?${query}`, { replace: false });
  };

  if (question.length) return <Navigate to={"/question"} />;

  return (
    <Animation className="flex flex-col text-sm md:mx-auto md:max-w-xl px-5 md:px-10">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-10 text-center">
        Welcome to <span className="text-orange-500">Quick Quiz</span>
      </h1>

      {/* Type Selection */}
      <label
        htmlFor="type"
        className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
      >
        Select Type
      </label>
      <select
        id="type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-neutral-50 border border-gray-300 rounded-lg px-2 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 font-medium mb-5"
      >
        {Types.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Difficulty Selection */}
      <label
        htmlFor="level"
        className="text-xs md:text-sm text-neutral-600 font-semibold mb-2"
      >
        Select Difficulty
      </label>
      <select
        id="level"
        name="level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="bg-neutral-50 border border-gray-300 rounded-lg px-2 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 font-medium mb-8 capitalize"
      >
        {Level.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Begin Test Button */}
      <button
        onClick={handleBegin}
        className="w-full rounded-full bg-orange-500 py-2 md:py-3 text-white text-sm md:text-base font-semibold hover:bg-orange-600 hover:shadow-md transition-all duration-300"
      >
        Begin Test
      </button>
    </Animation>
  );
}

export default App;
