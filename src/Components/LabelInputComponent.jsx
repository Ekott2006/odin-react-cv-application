export const LabelInputComponent = ({title, type, value, handleInput}) => {
    type ??= "text";
    const className = "border border-white rounded p-1 block w-full input bg-gray-900 text-white";
    return (
        <label className="w-full">
            {title}
            {type !== "textarea" ? (
                <input
                    type={type}
                    className={className}
                    value={value}
                    onInput={(e) => handleInput(e)}
                />
            ) : (
                <textarea
                    className={className}
                    value={value}
                    onInput={(e) => handleInput(e)}
                />
            )}
        </label>
    );
};