import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../store/expenseReducer";

const AddIncome = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const valueRef = useRef();

  return (
    <div>
      <from>
        <input
          type="number"
          className="border"
          ref={valueRef}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addIncome(parseInt(value)));
            console.log(valueRef);
            valueRef.current.value = null;
          }}
        >
          Sumbit
        </button>
      </from>
    </div>
  );
};

export default AddIncome;
