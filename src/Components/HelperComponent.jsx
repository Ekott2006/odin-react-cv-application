export const H2Component = ({title}) => <h2
    className="text-center text-2xl font-bold">{title}</h2>;

export const RemoveButtonComponent = ({handleClick}) => (
    <button onClick={handleClick}
            className="p-1 rounded my-2 float-right border-2 border-red-600 remove-btn">Remove</button>);

export const AddEntryButtonComponent = ({handleClick}) => (<button
    className="add-entry-btn border-2 border-black p-1 rounded-lg text-xl w-full my-4"
    type={"button"} onClick={handleClick}>
    Add Entry
</button>)

export const H1Component = ({title}) => <h2
    className="text-center text-6xl font-bold m-4">{title}</h2>;
