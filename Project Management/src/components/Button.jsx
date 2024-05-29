export default function Button({ children, ...props }) {
    return (
        <button {...props} className="my-8 bg-stone-700 text-stone-400 rounded-lg py-2 px-3 text-sm hover:bg-stone-400 hover:text-stone-100">
            {children}
        </button>
    );
}