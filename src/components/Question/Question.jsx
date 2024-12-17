import he from "he";
import Option from "../Option/Option";
import useQuestionStore from "../../store/zustand";

function Question({ id, handleClick, singleQuestion, summary }) {
  const { incorrect_answers, correct_answer, question } = singleQuestion;
  const { userAnswer: allUserAnswer } = useQuestionStore();

  const userAnswer = allUserAnswer.find((ans) => ans.question === question);

  const options = incorrect_answers
    .concat(correct_answer)
    .sort(() => Math.random() - 0.5);

  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
      {/* Question Header */}
      <div className="flex items-start space-x-4 mb-6">
        <h3 className="text-orange-500 font-bold text-xl md:text-2xl">{id}.</h3>
        <h3 className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
          {he.decode(question)}
        </h3>
      </div>

      {/* Options */}
      <div className="grid gap-4">
        {options.map((opt, i) => (
          <Option
            key={i}
            value={opt}
            idx={i}
            handleClick={handleClick}
            trueAnswer={correct_answer}
            userAnswer={userAnswer}
            summary={summary}
          />
        ))}
      </div>
    </section>
  );
}

export default Question;
