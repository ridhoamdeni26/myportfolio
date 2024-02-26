function InputErrorBackend({ message, className = "", ...props }) {
    return message ? (
        <span
            {...props}
            className={`font-Inter text-xs text-white bg-danger-500 rounded px-2 py-1 mt-2 inline-block`}
        >
            {message}
        </span>
    ) : null;
}

export default InputErrorBackend;
