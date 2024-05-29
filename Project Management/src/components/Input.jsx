import { forwardRef } from "react";

const Input = forwardRef(function Input({ title, isTextArea, ...props }, ref) {
    const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
    return (
        <p className="flex flex-col gap-1 my-4"> 
            <label className="uppercase text-stone-500 font-semibold text-sm">{title}</label>
            {isTextArea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
        </p>
    );
});

export default Input;