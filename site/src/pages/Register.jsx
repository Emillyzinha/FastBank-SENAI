import { useState } from "react";
import Botao from "../components/Botao/botao";
import Nav from "../components/Nav/nav";
import TextField from "../components/TextField/TextField";
import Footer from "../components/footer/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [ssn, setSsn] = useState('')
    const [numberCell, setNumberCell] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const [token, setToken] = useState('')
    const [confirmaPassword, setConfirmPassowrd] = useState('')
    const navigate = useNavigate()

    const cadastrar = () => {
        if (name == '' || birth == '' || ssn == '' || numberCell == '' || email == '' || password == '' || confirmaPassword == '') {
            alert('Fill all the fields')
        } else if (ssn.length != 11) {
            alert('The ssn number must be in this format: 12345678911')
        } else if (numberCell.length != 12) {
            alert('The phone number must be in this format: 191234-56789')
        } else if (password != confirmaPassword) {
            alert('The different password')
        } else {
            axios.post('https://emilly-teste.azurewebsites.net/auth/users/', {
                nomeCompleto: name,
                username: nickname,
                data_nascimento: birth,
                cpf: ssn,
                numero_telefone: numberCell,
                email: email,
                password: confirmaPassword
            })
                .then((response) => {
                    axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/create', {
                        cpf: ssn,
                        password: password,
                    })
                        .then((resposta) => {
                            setToken(resposta.data.access)
                            localStorage.setItem('token', JSON.stringify(resposta.data))
                            navigate('/')
                        })
                        .catch((erro) => {
                            console.log('não criou token', response)
                            if (erro?.response?.data?.message) {
                                alert(erro.response.data.message)
                                console.log('console', erro.response.data.message)
                            } else {
                                alert('An error has occurred. Register again please.')
                            }
                        })
                })
                .catch((erro) => {
                    console.log(erro);
                    if (erro.response.data.username == 'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters') {
                        alert("Your nickname cannot have a space.")
                    } if (erro.response.data.email == 'Enter a valid email address.') {
                        alert('Write the email correctly')
                    } else if (erro?.response?.data?.password) {
                        alert("The password cannot be too short or common, it must contain at least 8 characters.")
                    } else if (erro?.response?.data) {
                        alert('Fill in all fields')
                    }
                    else {
                        alert('An unexpected error occurred while logging in! Please contact support!')
                    }
                })
        }
    }

    return (
        <div className="h-full bg-temaCinza">
            <Nav />
            <div className="flex flex-col w-full justify-center items-center">
                <div className="h-[70rem] bg-none flex justify-center flex-col items-center w-11/12 xl:w-2/4 xl:bg-[#FFF] mt-32">
                    <h1 className="text-6xl font-bold text-center p-10">Register</h1>
                    <div className="flex flex-col w-full items-center">
                        <TextField type={"text"} children={"Full name"} onChange={(e) => setName(e.target.value)} />
                        <TextField type={"text"} children={"Nickname"} onChange={(e) => setNickname(e.target.value)} />
                        <TextField type={"date"} children={"Date of Bitrth"} onChange={(e) => setBirth(e.target.value)} />
                        <TextField type={"text"} children={"Social security number (SSN)"} onChange={(e) => setSsn(e.target.value)} />
                        <TextField type={"text"} children={"Cell phone"} onChange={(e) => setNumberCell(e.target.value)} />
                        <TextField type={"text"} children={"E-mail"} onChange={(e) => setEmail(e.target.value)} />
                        <TextField type={'password'} children={"Password"} onChange={(e) => setPassword(e.target.value)} />
                        <TextField type={"password"} children={"Confirm Password"} onChange={(e) => setConfirmPassowrd(e.target.value)} />
                    </div>
                    <Botao width={'w-1/3'} height={'h-16'} onClick={cadastrar}>
                        Register
                    </Botao>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Register
