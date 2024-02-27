import '../scss/layout/Login.scss';

function Login() {
  return (
    <section className="login">
      <form className="login__form">
        <h3>Iniciar sesión</h3>
        <label>E-mail</label>
        <input type="text" />
        <label>Contraseña</label>
        <input type="password" />
        <button className="login__form--login">Iniciar sesión</button>
      </form>
      <p></p>
    </section>
  );
}

export default Login;
