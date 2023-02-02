import { Link } from 'react-router-dom';
import './Login.css';





const Login = () => {
    return (

        <div className="container">
            <Link to={"/"}>Home</Link>
            <div className='lado_esquerdo'>
                <img className='Logo_login' src="/prancheta-8 1.png" alt="logo" />
                <div className='div_baixo'>
                    <h1 className='bem_vindo'>Bem vindo ao  <strong className='sub'> painel  </strong></h1> 
                    <div>
                    
                    </div>
                </div>
            
            <div>
                <form >
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" email="email" placeholder='Digite seu e-mail' />
                    </div>
                    <div>
                        <label htmlFor="senha"></label>
                        <input type="password" senha="senha" placeholder='Digite sua senha' />
                        </div>
                        <button className='acessar'> Acessar</button>
                        
                        </form>
                        
                    </div>




                    
                
            </div>
            <div className="lado_direito"> 
      <img className='pc' src="image 6.png" alt="" /> 
 </div> 


        </div>
    )
}






























export default Login;