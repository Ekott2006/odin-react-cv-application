import {FC} from "react";

export const H2Component: FC<{ title: string }> = ({title}) => <h2
    className="text-center text-2xl font-bold">{title}</h2>;

export const RemoveButtonComponent: FC<{ handleClick: (() => void) }> = ({handleClick}) => (
    <button onClick={handleClick}
            className="p-1 rounded my-2 float-right border-2 border-red-600 hover:bg-red-600">Remove</button>);

export const AddEntryButtonComponent: FC<{ handleClick: (() => void) }> = ({handleClick}) => (<button
        className=" hover:bg-gray-200 dark:hover:bg-black border-2 border-black p-1 rounded-lg text-xl w-full my-4"
        type={"button"} onClick={handleClick}>
        Add Entry
    </button>)

export const H1Component: FC<{ title: string }> = ({title}) => <h2
    className="text-center text-6xl font-bold m-4">{title}</h2>;
