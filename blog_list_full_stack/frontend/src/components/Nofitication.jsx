import { useSelector } from "react-redux";

const Notification = ({ message }) => {
  const operationStatus = useSelector((state) => state.operationStatus);
  return (
    <>
      <div
        className={`container-sm w-50 ${
          operationStatus === "error"
            ? "p-3 mb-2 bg-danger-subtle text-danger-emphasis shadow-sm text-center"
            : "p-3 mb-2 bg-success-subtle text-success-emphasis shadow-sm text-center"
        }`}
      >
        <p>{message}</p>
      </div>
    </>
  );
};

export default Notification;
