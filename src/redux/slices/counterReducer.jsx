import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: {
    counterName: "",
    counterValue: 0,
    showDropDown: false,
    showForm: false,
    showError: false,
    currentIndex: 0,
    isNew: false,
    error: "",
    counters: [
      {
        name: "Counter",
        value: 0,
      },
    ],
  },
  reducers: {
    setCounterNameAndValue: (state, action) => {
      state.counterName = action.payload.name;
      state.counterValue = action.payload.value;
    },
    setIsNewForm: (state, action) => {
      state.isNew = action.payload;
    },
    toggleDropDown: (state) => {
      state.showDropDown = !state.showDropDown;
    },
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },
    toggleError: (state) => {
      state.showError = !state.showError;
    },
    incrementCounter: (state, action) => {
      state.counters[action.payload].value++;
    },
    decrementCounter: (state, action) => {
      state.counters[action.payload].value--;
    },
    resetCounter: (state, action) => {
      state.counters[action.payload].value = 0;
    },
    changeCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    addNewCounter: (state, action) => {
      if(action.payload.name == ""){
        state.showError = true;
        state.error = "Name cannot be empty ! Please give some name to the counter !"
        return ;
      }
      else {
        //  check if the value is not a number
      if(isNaN(action.payload.value)){
        state.showError = true;
        state.error = `The value ${action.payload.value} is not a number`
        return ;
      }
        const newName = action.payload.name;
      let flag = false;
      for(let i=0; i<state.counters.length; i++)
      {
        if(newName === state.counters[i].name){
          flag = true;
        }
      }
      if(flag){
        state.showError = true;
        state.error = `The name ${newName} already exists! Please try a unique name`;
      }
      else{
        state.counters.push({
          name: action.payload.name,
          value: action.payload.value === "" ?  0  : action.payload.value
        });
          state.currentIndex = state.counters.length -1;
      }
      }
    },
    setCounterNameForm: (state, action) => {
      state.counterName = action.payload;
    },
    setCounterValueForm: (state, action) => {
      state.counterValue = action.payload;
    },
    editCounterNameAndValue: (state, action) => {
      // check if name is empty
      if(action.payload.name === ""){
        state.showError = true;
        state.error = "Counter name cannot be empty !";
        return;
      }
      //  check if the value is not a number
      if(isNaN(action.payload.value)){
        state.showError = true;
        state.error = `The value ${action.payload.value} is not a number`
        return ;
      }
      // check if name is already present in counter list
      const newName = action.payload.name;
      for(let i=0; i<state.counters.length; i++){
        if(i === state.currentIndex) {
          continue;
        }
        if(state.counters[i].name === newName){
          state.showError = true;
          state.error = `The name ${newName} already exists`
          return ;
        }
      }
      
      // edit counter name
      state.counters[state.currentIndex] = {
        name: action.payload.name,
        value: action.payload.value === "" ? 0 : action.payload.value
      };

    },
    deleteCounter: (state) => {
      if (state.counters.length != 1) {
        state.counters.splice(state.currentIndex, 1);
        state.currentIndex = 0;
      } else {
        state.showError = true;
        state.error = "Atlease 1 counter must be present !"
      }
    },
    setError: (state, action) => {
      state.error = action.payload ?? "";
    },
  },
});

export const {
  toggleDropDown,
  incrementCounter,
  decrementCounter,
  resetCounter,
  changeCurrentIndex,
  toggleForm,
  addNewCounter,
  setIsNewForm,
  setCounterNameAndValue,
  setCounterNameForm,
  setCounterValueForm,
  editCounterNameAndValue,
  deleteCounter,
  setError,
  toggleError,
} = counterReducer.actions;

export default counterReducer.reducer;
