const Notification = ({ message }) => {
  const style = {
    border: "4px solid black",
    padding: "6px",
  };
  return <div style={style}>{message} created</div>;
};

export default Notification;
