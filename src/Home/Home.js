import { Link } from 'react-router-dom'
import { FaFileAlt } from 'react-icons/fa';
import { IoMdTrendingUp } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { Grid } from '@mui/material';
import './Home.css';
const Home = () => {
    return (
        <div className="container_principal">
            <div className="lado-esquerdo">
            <Link to={"/login"}>Login</Link>
                <img className='logo_home' src="Prancheta-8 1.png" alt="" />

                {/* <Link to={"/login"}>Login</Link> */}
                <div className='container_botoes'>

                    <button className='btn_inicio'><div className='icone_inicio'><BsBarChart /></div> Inicio</button>

                    <button className='botoes' ><div className='icone'><FaFileAlt /></div>Contato</button>
                    <button className='botoes'><div className='icone'><IoMdTrendingUp /></div>Relatório</button>
                    <button className='botoes'><div className='icone'><FaFileAlt /></div>Contatos</button>
                    <button className='botoes'><div className='icone'><FaFileAlt /></div>Contatos</button>
                    <button className='botoes'><div className='icone'><FaFileAlt /></div>Contatos</button>
                    
                </div>

            </div>
            <div className="lado-direito">
                <p className='ola'>Olá, <strong className='usuario'> Usuário</strong> </p>
                <div className='linha'></div>
                <container className="imagens">
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                        <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
</strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                        <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
</strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur</strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='container_fotos'>
                        <img className='card' src="image 7.png" alt="" />
                        <div className='card-text'>
                            <strong className='titulo'>Lorem, ipsum dolor sit amet consectetur
                            </strong>
                            <p className='texto'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                </container>
            </div>


        </div>
    )
}

export default Home





