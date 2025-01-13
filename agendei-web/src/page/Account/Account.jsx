import './Account.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import logo from '../../assets/image/logo.png'
import wallpaper from '../../assets/image/fundo.png'

import api from '../../constants/api/api.js'

function Account() {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')

  const [name, setName] = useState('')
  const [dateBirth, setDateBirth] = useState('')
  const [cell, setCell] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleAccount = async () => {
    const newDateBirth = new Date(dateBirth)

    setMessage('')

    if (password != confirmPassword) {
      return setMessage('As senhas não conferem. Digite novamente.')
    }

    try {
      const response = await api.post('users/register', {
        name,
        date_birth: new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
        }).format(newDateBirth),
        cell,
        email,
        password,
      })

      if (response.data) {
        localStorage.setItem('sessionToken', response.data.token)
        localStorage.setItem('sessionUser', response.data.id_user)
        localStorage.setItem('sessionName', response.data.name)
        localStorage.setItem('sessionDateBirth', response.data.date_birth)
        localStorage.setItem('sessionDateCell', response.data.cell)
        localStorage.setItem('sessionEmail', response.data.email)

        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`

        navigate('/')
      } else {
        setMessage('Erro ao efetuar login. Tente novamente mais tarde.')
      }
    } catch (error) {
      if (error.response?.data.error) {
        setMessage(error.response?.data.error)
      } else {
        setMessage('Erro ao efetuar login. Tente novamente mais tarde.')
      }
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
          <form className="form-signin">
            <div>
              <img
                src={logo}
                alt="logo agendei na cor azul"
                className="logo mb-4"
              />
              <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
            </div>

            <div>
              <h3 className="mb-4 text-secondary">Preencha os campos abaixo</h3>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  type="date"
                  placeholder="Data de Nascimento"
                  className="form-control"
                  onChange={(e) => setDateBirth(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="(18) 99654-9785"
                  className="form-control"
                  onChange={(e) => setCell(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Senha"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="mt-3 mb-3">
                <button
                  className="btn btn-primary w-100"
                  type="button"
                  onClick={handleAccount}
                >
                  Criar minha conta
                </button>
              </div>
            </div>

            {message.length > 0 && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}

            <div>
              <span className="me-1">Já tenho uma conta.</span>
              <Link to="/">Acessar agora!</Link>
            </div>
          </form>
        </div>

        <div className="col-sm-7">
          <img src={wallpaper} alt="" className="background-login" />
        </div>
      </div>
    </>
  )
}

export default Account
