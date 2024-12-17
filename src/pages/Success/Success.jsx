import useQuestionStore from "../../store/zustand";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Animation from "../../components/Animation/Animation";
import Question from "../../components/Question/Question";

function Success() {
  const {
    trueAnswer,
    falseAnswer,
    resetQuestion,
    setTimeStamp,
    question: allQuestion,
  } = useQuestionStore();
  const navigate = useNavigate();

  const totalQuestions = trueAnswer + falseAnswer;
  const score = (trueAnswer * 100) / totalQuestions || 0; // Avoid division by zero
  const scoreColor =
    score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";

  useEffect(() => {
    setTimeStamp(0);
  }, []);

  const handleClick = () => {
    resetQuestion();
    navigate("/");
  };

  return (
    <Animation className="flex flex-col space-y-10 md:max-w-xl md:mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Score Header */}
      <h3 className="text-lg text-center text-neutral-800 font-bold md:text-xl">
        Your Final Score
      </h3>

      {/* Score Display */}
      <div
        className={`mx-auto flex items-center justify-center ${scoreColor} w-24 h-24 md:w-28 md:h-28 text-5xl md:text-6xl text-white font-bold rounded-full shadow-md`}
      >
        {Math.round(score)}
      </div>

      {/* Results Overview */}
      <div className="text-sm md:text-base text-neutral-700 font-medium space-y-2">
        <p className="flex justify-between">
          Correct Answers: <span className="text-green-600">{trueAnswer}</span>
        </p>
        <p className="flex justify-between">
          Wrong Answers: <span className="text-red-600">{falseAnswer}</span>
        </p>
        <p className="flex justify-between">
          Total Submitted:{" "}
          <span className="text-purple-600">{totalQuestions}</span>
        </p>
      </div>

      {/* Back to Dashboard Button */}
      <button
        onClick={handleClick}
        className="w-full py-3 rounded-full bg-orange-500 text-white text-sm md:text-base font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-md"
      >
        Back to Dashboard
      </button>

      {/* Answer Summary */}
      <div className="pt-10">
        <h3 className="text-center text-neutral-700 font-semibold text-base md:text-lg mb-4">
          Answers Summary
        </h3>
        <div className="space-y-6">
          {allQuestion.map((question, i) => (
            <Question
              key={i}
              singleQuestion={question}
              id={i + 1}
              summary={true}
              trueAnswer={question.correct_answer}
            />
          ))}
        </div>
      </div>
    </Animation>
  );
}

export default Success;
