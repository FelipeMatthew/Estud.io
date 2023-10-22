import { useEffect } from 'react'
import './style.css'

export default function Login() {

  useEffect(() => {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');

    const handleClick = () => {
      container?.classList.toggle('right-panel-active');

      overlayBtn?.classList.remove('btnScaled');
      window.requestAnimationFrame(() => {
        overlayBtn?.classList.add('btnScaled');
      });
    };

    overlayBtn?.addEventListener('click', handleClick);

    return () => {
      overlayBtn?.removeEventListener('click', handleClick);
    };
  }, [])

  return (
    <main>
        <div className="main">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Cadastrar</h1>
                        <span>ou utilize um email valido</span>
                        <div className="infield">
                            <input type="text" placeholder="Nome completo" />
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="email" placeholder="Email" name="email"/>
                            <label></label>
                        </div>
                        <div className="linha">
                            <div className="infield col-2">
                                <input type="password" placeholder="Senha" />
                                <label></label>
                            </div>
                            <div className="infield col-2 col-2-right">
                                <input type="password" placeholder="Confirma Senha" />
                                <label></label>
                            </div>
                        </div>
                        <div className="infield">
                                <input type="text" placeholder="Grau de formação" />
                                <label></label>
                        </div>
                        <div className="linha">
                            <div className="infield  col-2">
                                <input type="number" placeholder="Tempo de estudo (por dia)" />
                                <label></label>
                            </div>
                            <div className="infield col-2 col-2-right">
                                <input type="number" placeholder="Quantidade de matérias" />
                                <label></label>
                            </div>
                        </div>
                        <div className="linha">
                            <div className="infield col-2">
                                <p className='dataStyle'>Data de inicio</p>
        
                                <input type="date" placeholder="Data de inicio" />
                                <label></label>
                            </div>
                            <div className="infield col-2 col-2-right">
                                <p className='dataStyle'>Data Final</p>
                                <input type="date" placeholder="Data de inicio" />
                                <label></label>
                            </div>
                        </div>                       
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                       
                        <span>Use sua conta</span>
                        <div className="infield">
                            <input type="email" placeholder="Email" name="email"/>
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="password" placeholder="Senha" />
                            <label></label>
                        </div>
                        <a href="#" className="forgot">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container" id="overlayCon">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem-vindo</h1>
                            <p>Para se manter conectado efetue o login com seus dados pessoais.</p>
                            <button>Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Olá, amigo!</h1>
                            <p>Entre com sua conta para conhecer nossa ferramenta!</p>
                            <button>Cadastrar</button>
                        </div>
                    </div>
                    <button id="overlayBtn"></button>
                </div>
            </div>
        </div>
    </main>
    
    
  )
}

