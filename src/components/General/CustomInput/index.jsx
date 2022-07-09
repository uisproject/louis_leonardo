import React, { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type="text"
        {...props}
        className={`rounded-xl border-2 border-slate-200 py-1 px-3 w-[100%]`}
      />
    </div>
  );
});

export default CustomInput;
