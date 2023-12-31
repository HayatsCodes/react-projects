import { MdError } from "react-icons/md";

const ErrorCard = () => {
  const handleRetryClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <div
        className="border text-card-foreground m-4 p-4 bg-white shadow-md rounded-lg"
      >
        <div className="flex flex-col space-y-1.5 p-6 mb-2">
          <div className="flex items-center justify-start">
            <MdError className="w-6 h-6 mr-2 text-red-600" />
            <h3 className="tracking-tight text-lg font-semibold text-red-600">
              Network Error
            </h3>
          </div>
        </div>
        <div className="p-6 mb-4">
          <p className="text-gray-700 text-sm">
            It seems like you&apos;re having trouble connecting to the internet.
            Please check your network connection and try again.
          </p>
        </div>
        <div className="flex items-center p-6 mt-4">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            onClick={handleRetryClick}
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
