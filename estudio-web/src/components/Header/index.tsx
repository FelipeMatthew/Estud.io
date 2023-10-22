import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import './style.css'


export default function Header() {
  return (
    <header>
        <Link to='/'><img src={logo} alt="Logo" className="logo-image"/></Link>

        <nav className="navbar-nav">
            <ul className="narvbar-ul">
              
                <li className="li">
                  <Link to='/services'>
                    Serviços
                  </Link>
                </li>

                <li className="li">
                  <Link to='/about'>
                    Sobre
                  </Link>
                </li>

                <li id="linha"></li>

                <li className="li">
                  <Link to='/login'>
                    Login
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}