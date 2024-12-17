import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useQuestionStore from "../../store/zustand";
import Animation from "../../components/Animation/Animation";

function Question() {
  const { fetchQuestion, question: questionData = [] } = useQuestionStore();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questionData.length) {
      fetchQuestion(search);
    }
  }, [questionData, search]);

  // Loading State
  if (!questionData?.length)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <Animation className="max-w-xl mx-auto p-5 bg-white shadow-lg rounded-lg">
      {/* Quiz Information Header */}
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-orange-600 text-center">
        Quiz Information
      </h1>

      {/* Quiz Details */}
      <div className="flex flex-col space-y-4 text-gray-800 text-sm md:text-base">
        <div className="flex justify-between">
          <p className="font-medium">Number of questions</p>
          <p className="font-bold">{questionData.length}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Category</p>
          <p className="font-bold text-orange-500">
            {questionData[0]?.category || "N/A"}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Difficulty</p>
          <p className="font-bold capitalize text-lime-600">
            {questionData[0]?.difficulty || "N/A"}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Time</p>
          <p className="font-bold">3 mins</p>
        </div>
      </div>

      {/* Start Button */}
      <button
        disabled={!questionData.length}
        onClick={() => navigate(`/question/1`)}
        className="w-full mt-8 p-3 rounded-full bg-orange-500 text-white font-semibold text-lg md:text-xl transition-all duration-300 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
      >
        Start Quiz
      </button>
    </Animation>
  );
}

export default Question;
