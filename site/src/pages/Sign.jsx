import Botao from "../components/Botao/botao";
import Nav from "../components/Nav/nav";
import TextField from "../components/TextField/TextField";
import Footer from "../components/footer/footer";

function Sign() {

    const consolee = () => {
        console.log("APERTOU")
    }

    return (
        <div className="h-full bg-temaCinza">
            <Nav />
            <div className="flex flex-col w-full justify-center items-center">
                <div className="w-2/5 h-[50rem] bg-[#FFF] flex justify-center flex-col items-center mt-32">
                    <h1 className="text-6xl font-bold text-center mt-10">Register</h1>
                    <div className="flex flex-col w-full items-center">
                        <TextField>Name</TextField>
                        <TextField>Date of birth</TextField>
                        <TextField>Social security number (SSN)</TextField>
                        <TextField>Cell phone</TextField>
                    </div>
                    <Botao width={'w-1/5'} height={'h-16'} onClick={consolee}>
                        Next
                    </Botao>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sign
