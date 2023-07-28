import { useEffect, useState } from "react"
import Nav from "../components/Nav/nav"
import TitleField from "../components/TitleField/TileField"
import Footer from "../components/footer/footer"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [readonly, setreadonly] = useState(true)
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [date, setDate] = useState('')
    const [ssn, setSSN] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [textInput, setTextInput] = useState('Change')
    const [id, setId] = useState(0)
    const [token, setToken] = useState(0)
    const [header, setHeader] = useState({})
    const navigate = useNavigate()


    let dados = localStorage.getItem('token')

    useEffect(() => {
        let token = ''
        if (dados != undefined) {
            token = JSON.parse(dados)
        }

        let tokenAccess = dados.access
        const testeToken = {
            headers: {
                Authorization: `JWT ${tokenAccess}`
            },
        }

        setHeader(testeToken)
        setToken(tokenAccess)

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/',
            testeToken).then((res) => {
                setName(res.data.nomeCompleto)
                setNickname(res.data.username)
                setDate(res.data.data_nascimento)
                setSSN(res.data.cpf)
                setPhone(res.data.numero_telefone)
                setEmail(res.data.email)
                setId(res.data.id)

            })
            .catch((erro) => {
                if (erro.response.status === 401) {
                    axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/refresh/', { refresh: token.refresh })
                        .then((res) => {
                            tokenAccess = res.data.access
                            const testeToken = {
                                headers: {
                                    Authorization: `JWT ${tokenAccess}`
                                },
                            }

                            setHeader(testeToken)
                            setToken(tokenAccess)

                            axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/',
                                testeToken).then((res) => {
                                    setName(res.data.nomeCompleto)
                                    setNickname(res.data.username)
                                    setDate(res.data.data_nascimento)
                                    setSSN(res.data.cpf)
                                    setPhone(res.data.numero_telefone)
                                    setEmail(res.data.email)
                                    setId(res.data.id)
                                })
                        }
                        ).catch((erro) => {
                            if (erro?.response?.data?.message) {
                                alert(erro.response.data.message)
                            } else {
                                alert('An unexpected error occurred! Please contact support!')
                            }
                        })
                } else {
                    if (erro?.response?.data?.message) {
                        alert(erro.response.data.message)
                    } else {
                        alert('An unexpected error occurred! Please contact support!')
                    }
                }
            })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
    }


    const habilitarInput = () => {
        if (readonly == true) {
            setreadonly(false)
            setTextInput('Save')
        } else {
            setreadonly(true)
            setTextInput('Change')
        }
    }

    const logica = () => {
        if (textInput == 'Save') {
            editClient()
        } else {
            habilitarInput()
        }
    }

    const editClient = () => {
        axios.patch(`https://emilly-teste.azurewebsites.net/auth/users/me/`,
            {
                username: nickname,
                nomeCompleto: name,
                numero_telefone: phone,
                email: email,
                password: password,
            }, header
        ).then((res) => {
            alert('Fields changed successfully!')
            setreadonly(true)
        }).catch((error) => {
            if (password == '') {
                alert('Set a password')
            }
            console.log('deu errado', error)
        })
    }

    const deleteUser = () => {
        axios.delete(`https://emilly-teste.azurewebsites.net/bank/cliente/${id}/`, header)
        .then((res) => {
            alert('Your account has been successfully deleted!')
            localStorage.removeItem('token')
            navigate('/')
        })
        .catch((erro) => {
            alert('Unable to delete your account, contact support')
        })
    }

    return (
        <div className="h-screen w-full" onSubmit={handleSubmit}>
            <Nav />
            <div className="flex flex-col w-full items-center p-10">
                <div className="text-6xl flex flex-col sm:w-9/12">
                    <p className="text-tema text-center xl:text-8xl">ACCOUNT</p>
                    <TitleField situacao={readonly} title={'Full name'} type={"text"} value={name} onChange={(event) => setName(event.target.value)} />
                    <TitleField situacao={readonly} title={'Nickname'} type={"text"} value={nickname} onChange={(event) => setNickname(event.target.value)} />
                    <TitleField situacao={true} title={'Date of birth'} type={"text"} value={date} />
                    <TitleField situacao={true} title={'SSN'} type={"text"} value={ssn} />
                    <TitleField situacao={readonly} title={'Cell phone'} type={"text"} value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <TitleField situacao={readonly} title={'E-mail'} type={"text"} value={email} onChange={(event) => setEmail(event.target.value)} />
                    <TitleField situacao={readonly} title={'Password'} type={"password"} onChange={(event) => setPassword(event.target.value)} />
                    <div className="w-full flex justify-center flex-col xl:w-full xl:flex xl:flex-row xl:justify-end">
                        <button className="bg-temaCinza h-24 w-72 m-10 rounded-md text-4xl text-[#8B8B8B]" onClick={logica}> {textInput} </button>
                        <button className="bg-temaCinza h-24 w-72 m-10 rounded-md text-4xl text-[#8B8B8B]" onClick={() => deleteUser()}> {'Delete account'} </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Edit
