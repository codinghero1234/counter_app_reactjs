import { useDispatch, useSelector } from "react-redux";
import CounterForm from "../counter_form/CounterForm";

import "./Counter.css";
import {
  decrementCounter,
  deleteCounter,
  incrementCounter,
  resetCounter,
  setIsNewForm,
  toggleForm,
} from "../../redux/slices/counterReducer";

import Error from "../error/Error";

const Counter = () => {
  const currentIndex = useSelector((store) => store.counter.currentIndex);
  const value = useSelector(
    (store) => store.counter?.counters?.[currentIndex]?.value ?? "nulla"  
  );
  const name = useSelector(
    (store) => store.counter?.counters?.[currentIndex]?.name ?? "null"
  );
  const showForm = useSelector((store) => store.counter.showForm);
  const dispatch = useDispatch();
  const isNew = useSelector((store) => store.counter.isNew);
  const showError = useSelector((store) => store.counter.showError);
  const error = useSelector((store) => store.counter.error);
  return (
    <div className="counter">
      {showError && <Error error={error}/>}
      {showForm && <CounterForm isNew={isNew} />}
      <div className="counter-name">{name}</div>
      <div className="counter-value">{value}</div>
      <div className="delete-btn"
        onClick={() => {
          dispatch(deleteCounter(currentIndex));
        }}>
        Delete this counter
      </div>
      <div
        className="btn"
        onClick={() => {
          dispatch(resetCounter(currentIndex));
        }}>
        Reset
      </div>
      <div
        className="btn"
        onClick={() => {
          dispatch(setIsNewForm(false));
          dispatch(toggleForm(false));
        }}>
        Edit Counter value
      </div>
      <div
        className="btn"
        onClick={() => {
          dispatch(decrementCounter(currentIndex));
        }}>
        Decrement
      </div>
      <div
        className="btn"
        onClick={() => {
          dispatch(incrementCounter(currentIndex));
        }}>
        Increment
      </div>
    </div>
  );
};

export default Counter;
