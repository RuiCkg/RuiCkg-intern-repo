import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";

function CounterMessage() {
  const count = useSelector(selectCount);

  let message = "Keep going!";

  if (count > 5) {
    message = "Great job! ";
  } else if (count < 0) {
    message = "Below zero!";
  }

  return <p>{message}</p>;
}

export default CounterMessage;