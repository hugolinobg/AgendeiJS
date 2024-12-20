import './Account.jsx'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import wallpaper from '../../assets/image/fundo.png'

function Account() {
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
                  placeholder="Nome"
                  className="form-control"
                />
              </div>

              <div className="mt-2">
                <input
                  type="date"
                  placeholder="Data de Nascimento"
                  className="form-control"
                />
              </div>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="(18) 99654-9785"
                  className="form-control"
                />
              </div>

              <div className="mt-2">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="form-control"
                />
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Senha"
                  className="form-control"
                />
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  className="form-control"
                />
              </div>

              <div className="mt-3 mb-5">
                <button className="btn btn-primary w-100">
                  Criar minha conta
                </button>
              </div>
            </div>

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
