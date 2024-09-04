import { useDispatch, useSelector } from "react-redux";
import "./DropDown.css";
import { changeCurrentIndex, setIsNewForm, toggleForm } from "../../redux/slices/counterReducer";
const DropDown = () => {
  const counters = useSelector((store) => store.counter.counters);
  const dispatch = useDispatch();
  return (
    <div className="drop-down">
      <div className="add-new-counter" onClick={() => {
        dispatch(setIsNewForm(true));
        dispatch(toggleForm(true));
      }}>
        Add New Counter
      </div>
      {counters.map((counter, index) => (
        <DropDownCard key={index} name={counter.name} index={index}/>
      ))}
    </div>
  );
};

const DropDownCard = (props) => {
    const dispatch = useDispatch();
  return (
    <div className="drop-down-card" onClick={() => {
        dispatch(changeCurrentIndex(props.index));
    }}>
      {props?.name}
    </div>
  );
};

export default DropDown;
