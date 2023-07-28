const TextField = ({ type, children, onChange }) => {
    return (
        <input type={type} placeholder={children} onChange={onChange} className=" h-20 m-3 p-5 shadow-lg drop-shadow-md text-2xl rounded-lg md:w-2/3" />
    );

}

export default TextField;