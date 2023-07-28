import logo_nome from '../../../src/assets/logo-nome.png'

const Footer = () => {
    return (
        <footer className='w-full mt-32'>
            <div className="border w-full" />
            <div className='flex justify-center p-10'>
                <img className='flex justify-center' src={logo_nome} />
            </div>
        </footer>
    );
}

export default Footer;