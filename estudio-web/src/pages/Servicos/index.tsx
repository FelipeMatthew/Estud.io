import './style.css';
import servicePicture from '../../assets/images/service-pic.png'
import { Link } from 'react-router-dom';

export default function Servico() {
  return (
    <main className="wrapper space" >

      <img className="img-padrao" src={servicePicture} alt="Service picture" />

      <div className="metodo">

        <ul className="ul-padrao grid">
          <li className="narvbar-ul li-padrao" >
            <Link to='/services/pomodoro'>
              Pomodoro
            </Link>
          </li>

          <li className="narvbar-ul li-padrao" >
            <Link to='/services/flashcards'>
              Flash Cards
            </Link>
          </li>

          <li className="narvbar-ul li-padrao" >
            <Link to='/services/todolist'>
              To do list
            </Link>
          </li>

          <li className="narvbar-ul li-padrao" >
            <Link to='/services/cornell'>
              Cornell
            </Link>
          </li>
        </ul>

      </div>
    </main>
  )
}