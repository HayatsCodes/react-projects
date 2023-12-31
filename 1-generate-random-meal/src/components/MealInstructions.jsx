/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

const MealInstructions = ({ instructions, visibility, updateModalVisibility }) => {
  const instructionClass = visibility
    ? "fixed top-1/2 left-1/2 transform overflow-y-auto -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80%] border-3 border-red-500 font-bold tracking-wider word-spacing-4"
    : "hidden";

  return (
    <div>
      <div aria-hidden="true" className={instructionClass}>
        <div className="relative p-4 w-full max-w-2xl max-h-full overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cooking Instructions
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={updateModalVisibility}
              >
                <AiOutlineClose className="w-3 h-3" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4 overflow-y-auto">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {instructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealInstructions;
