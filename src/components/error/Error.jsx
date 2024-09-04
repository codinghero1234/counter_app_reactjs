import { useDispatch, useSelector } from "react-redux";
import "./Error.css";
import { setError, toggleError } from "../../redux/slices/counterReducer";

const Error = () => {
  const error = useSelector((store) => store.counter.error);
  const dispatch = useDispatch();
  return (
    <div className="error-card">
      <div className="error-msg">{error}</div>
      <div
        className="error-btn"
        onClick={() => {
          dispatch(toggleError());
          dispatch(setError(""));
        }}>
        OK
      </div>
    </div>
  );
};

export default Error;
