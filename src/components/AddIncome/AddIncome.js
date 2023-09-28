import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../store/expenseReducer";

const AddIncome = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  return (
    <div>
      <from>
        <input
          type="number"
          className="border"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addIncome(parseInt(value)));
            console.log(value);
            console.log(value);
          }}
        >
          Sumbit
        </button>
      </from>
    </div>
  );
};

export default AddIncome;
