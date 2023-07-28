import logoTopo from '../assets/logo-topo.png'
import Botao from "../components/Botao/botao";
import Nav from '../components/Nav/nav';
import Footer from '../components/footer/footer';
import WeAre from '../components/weAre/weAre';
import WeAreRight from '../components/weAre/weAreRight';
import cartao from '../../src/assets/cartaoGold.png'
import bancoMobile from '../../src/assets/bancoMobile.png'
import playStore from '../../src/assets/playstore.png'
import appStore from '../../src/assets/appstore.png'

function Main() {
    return (
        <div className="h-screen w-full">
            <Nav />
            <div className="flex flex-col ">
                <div className="flex justify-center">
                    <img className="w-[50rem] max-xl:w-96 mt-10" src={logoTopo} />
                </div>
                <h1 className="text-3xl text-tema xl:text-8xl font-dm mt-5 text-dm-sans text-center" >EVERYTHING YOU NEED FROM A BANK IN ONE PLACE</h1>

                <WeAre ml={'ml-[53%]'} mt={'mt-[10rem]'} />
                <WeAreRight />
                <WeAre ml={'ml-[53%]'} mt={'mt-[8.6rem]'} />

                <div className='flex justify-between items-center mt-16 flex-col xl:flex-row xl:justify-around'>
                    <h1 className='text-5xl w-full text-center flex items-center xl:text-8xl xl:w-2/5'>Ask for your card without annuity</h1>
                    <img className='w-48 mt-8 xl:w-1/4' src={cartao} />
                </div>

                <div className='w-full flex justify-around mt-10 flex-col xl:flex-row'>
                    <h1 className='text-4xl text-center flex items-center ml-1.5 mr-1.5 xl:hidden'>Download our app and get access to our services</h1>
                    <div className="w-full flex justify-center mt-8">
                        <img className='w-52 h-96 xl:w-96 xl:h-full' src={bancoMobile} />
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <h1 className='max-xl:hidden xl:text-8xl text-center flex items-center ml-1.5 mr-1.5'>Download our app and get access to our services</h1>
                        <div className="flex items-center justify-center mt-8">
                            <img className='w-80 max-xl:hidden mr-10' src={appStore} />
                            <img className='w-80 max-xl:hidden' src={playStore} />
                        </div>
                    </div>
                    <div className='w-full flex flex-col mt-8 justify-center items-center xl:hidden'>
                        <img className='w-80 mb-3' src={appStore} />
                        <img className='w-80' src={playStore} />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center xl:hidden">
                    <h1 className='text-4xl flex items-center text-center mt-10 p-1'>To know more contact us</h1>
                    <div className="w-full flex mt-3 justify-center items-center">
                        <input type='text' value='Your email' className='outline-none border-[#000] border-[3px] h-16 w-4/6 text-[22px] p-5 xl:bg-temaCinza' />
                        <button className='w-1/4 h-16 bg-[#000] text-[#fff] text-[22px]'>Send</button>
                    </div>
                </div>
                
                <div className="w-full flex justify-center max-xl:hidden">
                    <div className="bg-temaCinza h-[30rem] w-[90%] flex mt-32 items-center">
                        <h1 className='w-1/2 text-6xl flex items-center text-center p-14'>We are a bank focused on helping you, so we have a series of benefits for you!</h1>
                        <div className="h-full flex items-center">
                            <div className="border h-5/6" />
                        </div>
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            <h1 className='text-5xl'>To know more contact us</h1>
                            <div className="w-[32em] flex mt-12">
                                <input type='text' value='Your email' className='outline-none bg-temaCinza border-[#000] border-[3px] h-16 w-3/4 text-2xl p-7' />
                                <button className='w-1/4 h-16 bg-[#000] text-[#fff] text-2xl'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;