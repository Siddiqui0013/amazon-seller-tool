const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-[222] items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-lg w-[70%]">
        <button
          className="text-blue-500 text-sm float-right"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
