import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Nav = () => {
    let dados = localStorage.getItem('token')
    const navigate = useNavigate()

    const goOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <nav className="w-full border-b-2 border-black">
            <ul className="w-full flex justify-center font-dm-sans text-2xl md:p-6">
                {dados == null ?
                    <>
                        <div className="flex justify-between w-full p-4 xl:flex xl:w-1/2">
                            <Link to={'/'}> <li className="text-[16px] sm:text-3xl">HOME</li> </Link>
                            <Link to={'/register'}> <li className="text-[16px] sm:text-3xl">REGISTER</li> </Link>
                            <Link to={'/enter'}> <li className="text-[16px] sm:text-3xl">ENTER</li> </Link>
                            <Link to={'/aboutus'}> <li className="text-[16px] sm:text-3xl">ABOUT US</li> </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex justify-between w-full p-6 xl:flex xl:w-8/12">
                            <Link to={'/'}> <li className="text-[16px] xl:text-3xl">HOME</li> </Link>
                            <Link to={'/aboutus'}> <li className="text-[16px] xl:text-3xl">ABOUT US</li> </Link>
                            <Link to={'/edit'}> <li className="text-[16px] xl:text-3xl">EDIT</li> </Link>
                            <button onClick={() => goOut()} className="text-[16px] xl:text-3xl">EXIT</button>
                        </div>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Nav
