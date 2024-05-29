export default function Input({ title, type, value, onChange }) {
    return (
        <p>
            <label>{title}</label>
            <input type={type} value={value} onChange={(event) => onChange(Number(event.target.value))} />
        </p>
    );
}