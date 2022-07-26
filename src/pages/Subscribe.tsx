import logoMockup from '../assets/code-mockup.png';
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe(){
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name, 
        email
      }
    })

    navigate('/event')
  
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex justify-center md:justify-start">
            <Logo/>
          </div>
          <h1 className="mt-8 md:px-0 px-8 md:text-[2.5rem] text-[1.5rem] leading-tight md:text-left text-center">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="md:mt-4 mt-8 md:mb-0 mb-8 md:px-0 px-8 md:text-[1rem] text-[0.8rem] text-gray-200 leading-relaxed md:text-left text-center">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded md:w-96 w-full">
          <strong className="md:text-2xl text-1xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Digite seu melhor e-mail" 
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={logoMockup} alt="mt-10" className="md:p-0 px-4"/>
    </div>
    )
}