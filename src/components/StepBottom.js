export const StepBottom = ({
  forwardSwipe,
  backwardSwipe,
  currentIndex,
  length,
}) => {
  return (
    <div>
      {/* x-show="step != 'complete'" */}

      <div className='max-w-xs mx-auto'>
        <div className='flex justify-around'>
          <div className='w-1/5' onClick={backwardSwipe}>
            <button
              className={`w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border ${
                currentIndex === 0 && 'text-gray-300'
              }`}
              disabled={currentIndex < 0}
            >
              Previous
            </button>
          </div>

          <div className='w-1/2 text-right' onClick={forwardSwipe}>
            <button className='w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-ai hover:bg-ai-dark font-medium'>
              {currentIndex === length - 1 ? 'Complete' : 'Next'}
            </button>
            {/* <button className='w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium'>
              Complete
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
