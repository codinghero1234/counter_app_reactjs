import "./Header.css";
import DropDown from "../drop-down/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropDown } from "../../redux/slices/counterReducer";

const Header = () => {
  const showDropDown = useSelector((store) => store.counter.showDropDown);
  const counterLength = useSelector((store) => store.counter.counters.length);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1 className="title">Counter App </h1>
      <div className="nav" onClick={() => {
        dispatch(toggleDropDown());
      }}>
        
        <p className="counters">Counters ({counterLength})</p>
        {showDropDown && <DropDown/>}
      </div>
    </div>
  );
};

export default Header;
