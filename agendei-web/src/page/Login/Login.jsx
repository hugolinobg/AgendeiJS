import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import logo from '../../assets/image/logo.png'
import wallpaper from '../../assets/image/fundo.png'

import api from '../../constants/api/api.js'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    setMessage('')

    try {
      const response = await api.post('/admin/login', {
        email,
        password,
      })

      if (response.data) {
        localStorage.setItem('sessionToken', response.data.token)
        localStorage.setItem('sessionUser', response.data.id_admin)
        localStorage.setItem('sessionName', response.data.name)
        localStorage.setItem('sessionDateBirth', response.data.date_birth)
        localStorage.setItem('sessionDateCell', response.data.cell)
        localStorage.setItem('sessionEmail', response.data.email)

        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`

        navigate('/home')
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
              <h5 className="mb-5">
                Gerencie seus agendamentos de forma descomplicada.
              </h5>
            </div>

            <div>
              <h3 className="mb-4 text-secondary">Acesse sua conta</h3>

              <div className="mt-4">
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

              <div className="mt-3 mb-3">
                <button
                  onClick={handleLogin}
                  className="btn btn-primary w-100"
                  type="button"
                >
                  Login
                </button>
              </div>
            </div>

            {message.length > 0 && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}

            {/* <div>
              <span className="me-1">Não tenho uma conta.</span>
              <Link to="/register">Criar agora</Link>
            </div> */}
          </form>
        </div>

        <div className="col-sm-7">
          <img src={wallpaper} alt="" className="background-login" />
        </div>
      </div>
    </>
  )
}

export default Login
