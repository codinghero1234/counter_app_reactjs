import { useDispatch, useSelector } from "react-redux";
import "./CounterForm.css";
import {
  addNewCounter,
  changeCurrentIndex,
  editCounterNameAndValue,
  setCounterNameAndValue,
  setCounterNameForm,
  setCounterValueForm,
  toggleForm,
} from "../../redux/slices/counterReducer";
import { useEffect } from "react";
const CounterForm = () => {
  const isNew = useSelector((store) => store.counter.isNew);
  const currentIndex = useSelector((store) => store.counter.currentIndex);
  const selectedCounter = useSelector(
    (store) => store.counter.counters[currentIndex]
  );
  const showError = useSelector((store) => store.counter.showError);
  useEffect(() => {
    if (!isNew) {
      dispatch(
        setCounterNameAndValue({
          name: selectedCounter.name,
          value: selectedCounter.value,
        })
      );
    } else {
      dispatch(
        setCounterNameAndValue({
          name: "",
          value: 0,
        })
      );
      console.log("This is the new form !");
    }
  }, [isNew]);
  const dispatch = useDispatch();
  const counterName = useSelector((store) => store.counter.counterName);
  const counterValue = useSelector((store) => store.counter.counterValue);
  const length = useSelector((store) => store.counter.counters.length);
  return (
    <div className="counter-form">
      <h1>Counter Form</h1>
      <p>Counter Name</p>
      <input
      className="field"
        type="text"
        placeholder="Enter Counter Name"
        value={counterName}
        onChange={(e) => {
          dispatch(setCounterNameForm(e.target.value));
        }}></input>
      <p>Counter Value</p>
      <input
      className="field"
        type="text"
        placeholder="Enter Counter Value"
        value={counterValue}
        onChange={(e) => {
          dispatch(setCounterValueForm(e.target.value));
        }}></input>
      <button
        className="btn"
        onClick={() => {
          dispatch(toggleForm());
        }}>
        Cancel
      </button>
      <button
        className="btn"
        onClick={() => {
          if (isNew) {
            dispatch(
              addNewCounter({
                name: counterName,
                value: counterValue,
              })
            );
            dispatch(toggleForm());
          } else {
            dispatch(
              editCounterNameAndValue({
                name: counterName,
                value: counterValue,
              })
            );
            dispatch(toggleForm());
          }
        }}>
        {isNew ? "Add" : "Edit"}
      </button>
    </div>
  );
};

export default CounterForm;
