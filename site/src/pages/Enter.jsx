import { useEffect, useState } from "react";
import Botao from "../components/Botao/botao";
import Nav from "../components/Nav/nav";
import TextField from "../components/TextField/TextField";
import Footer from "../components/footer/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Enter() {

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [numeroTentativas, setNumeroTentativas] = useState(3)
    const [logar, setLogar] = useState(true)
    const navigate = useNavigate()
    const dateNow = new Date();
    const hours = dateNow.getHours()

    const enter = async () => {
        { numeroTentativas == 0 ? setLogar(false) : setLogar(true) }
        if (numeroTentativas == 0 || !logar) {
            var timeBack = (hours * 4) % 24
            if (timeBack != hours && numeroTentativas == 0) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            } else if (timeBack == hours && numeroTentativas == 0) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            }
            else if (timeBack != hours) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            } else {
                setNumeroTentativas(3)
            }
        }
        else if (numeroTentativas == 3 || numeroTentativas == 2 || numeroTentativas == 1 && logar) {
            axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/create', {
                cpf: cpf,
                password: password,
            }).then((resposta) => {
                localStorage.setItem('token', JSON.stringify(resposta.data))
                navigate('/')

            })
                .catch((erro) => {
                    if (cpf == '' || password == '') {
                        alert('Fill the fields')
                    }
                    else if (erro?.response?.data?.message) {
                        alert(erro.response.data.message)
                    } else if (erro.response.data.detail == 'No active account found with the given credentials') {
                        alert('Check your password and SSN')
                        var tentativas = numeroTentativas
                        setNumeroTentativas(tentativas -= 1)
                    } else {
                        alert('An unexpected error occurred while logging in! Please contact support!')
                    }
                })
        }
    }

    return (
        <div className="h-full bg-temaCinza">
            <Nav />
            <div className="flex flex-col w-full justify-center items-center">
                <div className="w-11/12 h-[40rem] flex justify-center flex-col items-center xl:bg-[#FFF] xl:w-2/4 mt-32">
                    <h1 className="text-6xl font-bold text-center p-10">Enter</h1>
                    <div className="flex flex-col w-full items-center">
                        <TextField type={"text"} children={"SSN"} onChange={((e) => setCpf(e.target.value))} />
                        <TextField type={"password"} children={"Password"} onChange={((e) => setPassword(e.target.value))} />
                    </div>
                    <Botao width={'w-1/3'} height={'h-16'} onClick={() => enter()}>
                        Enter
                    </Botao>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Enter
