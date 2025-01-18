import { IoClose } from "react-icons/io5";
type IOpenModal = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  renderComponent: React.JSX.Element;
};
const OpenModal = ({ setIsDrawerOpen, renderComponent, title }: IOpenModal) => {
  return (
    <>
      <div className="flex fixed inset-0 !z-50 justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="flex fixed inset-0 z-50 justify-center items-center">
          <div
            className={`!p-12 w-2/5 h-auto zoomIn zoomOut bg-white rounded-2xl shadow-lg`}
          >
            <div className="flex justify-end relative bottom-8 left-[2rem]">
              <button
                className="fixed cursor-pointer text-black"
                onClick={() => setIsDrawerOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <div className="w-full h-full">
              {title && (
                <h2 className="text-center text-2xl font-semibold text-black py-4">
                  {title}
                </h2>
              )}
              {renderComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenModal;
