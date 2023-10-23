import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <p className="py-8 text-secondary">Layout changed.</p>
      <form className="flex flex-col gap-2">
        <input type="text" className="w-40" />
        <button className="w-16 text-sm font-normal bg-primary">
          set name
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
