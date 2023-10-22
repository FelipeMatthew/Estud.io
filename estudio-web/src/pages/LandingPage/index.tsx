import "./style.css"
import imageLandingPage from "../../assets/images/main-picture.png"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
<body>
    

    <main className="wrapper">

        <section>
            <div className="ldp">
                <p>
                    <span className="main-studio-span">Bem-vindo ao <span className="studio-span">Estudy.io</span></span>,
                    <br/><span className="main-above-studio-span">O seu parceiro definitivo para aprimorar seus métodos de estudos.</span>
                </p>
                
            
                <img className="img-ldp" src={imageLandingPage} alt="Main landing page screen" />
            </div>
            
            <Link to='/login'> <button>Saiba mais </button></Link>
        </section>
      
            
    </main>

    <footer>

    </footer>

</body>
  )
}