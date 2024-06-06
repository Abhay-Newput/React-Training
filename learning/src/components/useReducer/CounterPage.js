import { useReducer } from "react";

const CounterPage = ({ initialCount }) => {
  //   const [count, setCount] = useState(initialCount);
  //   const [value, setValue] = useState("");

  const INCREMENT_COUNT = "increment";
  const DECREMENT_COUNT = "decrement";
  const CHANGE_VALUE = "change-value";
  const INCREMENT_BY_INPUT = "increment-by-input";
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case CHANGE_VALUE:
        return {
          ...state,
          value: action.payload,
        };
      case INCREMENT_BY_INPUT:
        return {
          ...state,
          count: parseInt(state.count) + parseInt(action.value || 0),
          value: "",
        };
      default:
        return state;
    }
    // if (action.type === INCREMENT_COUNT) {
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // }
    // if (action.type === CHANGE_VALUE) {
    //   return {
    //     ...state,
    //     value: action.payload,
    //   };
    // }

    // return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    // setValue(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + parseInt(value));
    // setValue("");
    dispatch({
      type: INCREMENT_BY_INPUT,
      value: state.value,
    });
  };

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input type="number" value={state.value} onChange={handleChange} />
        <button>Add IT</button>
      </form>
    </div>
  );
};

export default CounterPage;
