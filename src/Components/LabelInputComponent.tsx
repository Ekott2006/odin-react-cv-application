import {ChangeEvent, FC} from "react";

export const LabelInputComponent: FC<{
    title: string;
    type?: "textarea" | "email" | "password" | "text" | "date";
    value: string;
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({title, type, value, handleInput}) => {
    type ??= "text";
    const className = "border border-gray-500 rounded p-1 block w-full input dark:bg-gray-900 dark:text-white";
    return (
        <label className="w-full">
            {title}
            {type !== "textarea" ? (
                <input
                    type={type}
                    className={className}
                    value={value}
                    onInput={(e) => handleInput(e as ChangeEvent<HTMLInputElement>)}
                />
            ) : (
                <textarea
                    className={className}
                    value={value}
                    onInput={(e) => handleInput(e as ChangeEvent<HTMLTextAreaElement>)}
                />
            )}
        </label>
    );
};