

export default function Input({ id, type, label, ...props }) {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={id} {...props} />
        </p>
    );
}