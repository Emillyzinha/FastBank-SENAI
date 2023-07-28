
const WeAre = ({ img, ml, mt }) => {
    return (
        <div className='flex mt-6'>
            <div className="w-full h-56 rounded-r-none bg-tema flex pt-16 justify-center pl-7 xl:w-3/5 xl:rounded-r-[1rem] xl:h-96">
                <div className='flex flex-col'>
                    <div className="flex items-end">
                        <h3 className="text-7xl max-xl:text-4xl">WE ARE</h3>
                        <h3 className="text-9xl text-[#fff] max-xl:text-5xl">FLEXIBLE</h3>
                    </div>
                    <div className="flex">
                        <h3 className="text-8xl text-[#fff] max-xl:text-4xl">VACATION</h3>
                        <h3 className="text-5xl max-xl:text-4xl">FOR YOU</h3>
                    </div>
                </div>
            </div>
            {/* <div className={`w-64 h-64 absolute ${ml} ${mt}`} >
                <img src={img} />
            </div> */}
        </div>
    );
}

export default WeAre;