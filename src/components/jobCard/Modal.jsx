


const Modal = ({ onClose, JobDetail }) => {
  // Function to stop propagation for modal content clicks
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose} // Handles overlay click to close modal
    >
      {/* Overlay with transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Modal container that stops the propagation to prevent modal close when it's clicked */}
      <div
        className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow"
        onClick={stopPropagation} // Prevents closing when clicking inside the modal
      >
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="w-full text-xl font-semibold text-gray-900">
            Job Description
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-base leading-relaxed text-gray-500">
            {JobDetail || "no detail"}
          </p>
          <p className="text-base leading-relaxed text-gray-500">{JobDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

