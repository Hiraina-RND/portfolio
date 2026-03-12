import "./input.css"

function Input({ type, placeholder }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="input w-[90%] py-4 px-6 rounded-lg"
        />
    )
}

export default Input;