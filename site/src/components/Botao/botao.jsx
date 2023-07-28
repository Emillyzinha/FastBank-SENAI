const Botao = ({ children, height, width, onClick }) => {
    return (
        <button className={`bg-tema ${height} ${width} m-10 rounded text-3xl text-[#A6771A]`} onClick={onClick} >
            {children}
        </button>
    );
}

export default Botao;