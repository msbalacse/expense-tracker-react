import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addMoney } from "../../store/expenseReducer";

const AddIncome = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [reason, setReason] = useState(null);
  const valueRef = useRef();

  const handleSubmit = () => {
    dispatch(addMoney({ value, reason }));
  };

  return (
    <div>
      <from>
        <div className="input__control">
          <label htmlFor="amount" className="font-f3Secuenicia">
            Amount
          </label>
          <input
            type="number"
            className="border font-f3Secuenicia"
            ref={valueRef}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="input__control">
          <label htmlFor="reason">Why?</label>
          <input type="text" onChange={(e) => setReason(e.target.value)} />
        </div>
        <input type="submit" onClick={handleSubmit} />
      </from>
    </div>
  );
};

export default AddIncome;
