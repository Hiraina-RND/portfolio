import "./input.css"

function Input({ type, placeholder, value, onChange, name }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className="input w-[90%] py-4 px-6 rounded-lg"
        />
    )
}

export default Input;