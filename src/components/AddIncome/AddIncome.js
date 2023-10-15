import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoney } from '../../store/expenseReducer';

const AddIncome = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [reason, setReason] = useState(null);
  const valueRef = useRef();

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = () => {
    dispatch(addMoney({ value, reason }));
  };
  console.log(user);
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
