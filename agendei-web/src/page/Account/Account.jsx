import './Account.jsx'
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
                />
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Senha"
                  className="form-control"
                />
              </div>

              <div className="mt-3 mb-5">
                <button className="btn btn-primary w-100">Login</button>
              </div>
            </div>

            <div>
              <span className="me-1">Não tenho uma conta.</span>
              <a href="#">Criar agora</a>
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
