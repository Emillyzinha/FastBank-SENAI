import { useEffect, useState } from "react";

const TitleField = ({ situacao, value, title, type, children, onChange }) => {
    // readOnly = vai pro banco com o valor preenchido
    const [color, setColor] = useState('')
    useEffect(() => {
        if (situacao == true) {
            setColor('bg-[#e7e7e7]')
        } else {
            setColor('bg-[#ffffff')
        }
    })
    
    return (

        <div className="m-10">
            <h3 className="text-4xl text-tema mb-4 xl:text-5xl">{title}</h3>
            <input readOnly={situacao} value={value} type={type} placeholder={children} onChange={onChange} className={`${color} outline-none w-full h-24 p-5 shadow-lg drop-shadow-md text-4xl rounded-lg`} />
        </div>
    );

}

export default TitleField;
