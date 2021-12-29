


function LoginForm() {
    return (
      <div>
          <div className="first__block">
          <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="h1__Span">OpenBootcamp <span className="OBblue">| Alumnos</span></h1>
      </div>
            <div className="pass__box">
              <label for="mail">
                  Email
              </label>
              <br/>
              <input type="email" placeholder="Introduce tu correo" name="uname" required=""></input>
              </div>
              <div className="pass__box">
                <label for="pws">
                    Contraseña
                </label>
                <br/>
                <input type="password" placeholder="Introduce tu contraseña" name="psw" required=""></input>
              </div>
          
          <div class="second__block">
            <label>
                <input class="remember" type="checkbox" checked="false" name="remember"/>
            </label>
            <h5><span class="remember__text">Recuérdame</span> <span><a class="forgot OBblue" href="/">He olvidado la contraseña</a></span></h5>
            
          </div>
          <button className="login__button" >Iniciar sesión</button>
          
          
          
          <div className="footer__main">
          <p className="footer">Copyright 2021 Open Bootcamp SL, Imagina Group</p>
          <p className="footer">Todos los derechos reservados</p>
          <p className="footer footer__link"> <a href="/">Política de privacidad </a></p>

          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


      </div>

      </div>
  
    );
  }

  export default LoginForm;