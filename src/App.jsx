import { MagnifyingGlass, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { Modal } from "./components/Modal";




const contatos = [
  {
    letter: 'A',
    contact: [
      {
        name: 'Abraão Sena',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(11) 90876-1234'
      }
    ]

  },

  {
    letter: 'B',
    contact: [
      {
        name: 'Beatriz Clasen',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(48) 90876-1123'
      },
      {
        name: 'Brenda Mendes',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(48) 90876-1123'
      }
    ]

  },
  {
    letter: 'C',
    contact: [
      {
        name: 'Caio Vinícius',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(21) 90876-8765'
      },
      {
        name: 'Cleiton Souza',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(21) 90876-8765'
      },
      {
        name: 'Cleiton Souza',
        avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
        phone: '(21) 90876-8765'
      }
      

      
    ]

  }
]

export default function App() {

const [showModal, setShowModal] = useState(false)
const [showModal1, setShowModal1] = useState(false)
const [showModal2, setShowModal2] = useState(false)

  return (

    <>
    <div className="bg-zinc-600 flex h-screen justify-center 
                items-center p-10">


      <div className=" max-w-md w-full bg-[#282843] rounded-md overflow-auto ">
        <div className="bg-[#1A1924] h-40 w-full p-10">

          <div className="flex items-center justify-between mb-6 ">
            <h1 className="text-white font-bold text-xl">Meus Contatos</h1>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(state => !state)} ><Plus size={24} color="#fff" /></button>
              <button onClick={() => setShowModal1(state => !state)} > <PencilSimple size={24} color="#fff" /></button>
              <button onClick={() => setShowModal2(state => !state)} ><Trash size={24} color="#fff" /></button>
             
              
            </div>
          </div>

          <div className="flex gap-2 px-6 py-4 items-center bg-[#24243D] h-10 w-full">
            <MagnifyingGlass size={16} color="#f2eded" weight="bold" />
            <input className="bg-transparent w-full outline-none text-xs text-zinc-200 focus:border-blue-500" type="text" placeholder="Busque por nome ou por dados de contato..." />
          </div>
        </div>


        <div className="p-10  ">

          <div className="flex flex-col h-96  overflow-auto">


{
  contatos.map(contato => 
  (
    <>
    <div key={contato.letter} className=" flex gap-14 mb-6" >

    <div  className="h-10 w-10 bg-violet-600 flex items-center justify-center text-white font-bold rounded-md">
      <p  >{contato.letter}</p>
    </div>

    <div className="flex flex-col">

      {
        contato.contact.map( (item, index) => (
<>
          <div key={index} className="flex gap-4 mb-6">
          <img className="rounded-full h-12 w-12" src={item.avatar} alt="" />
          <div className="flex flex-col">
            
            <h1 className="text-white font-bold">{item.name}</h1>
            <p className="text-[#8C8CBA] text-sm">{item.phone}</p>
          </div>
  
        </div>
        </>
        ))
      }



    </div>

  </div>
  </>

  ))
}
          </div>
        </div>

      </div>

    </div>
  <Modal isVisble={showModal} onClose={() => setShowModal(state => !state)}>
    <div className="p-6">
    <h1>Adicionar Contato</h1>
    </div>
    
  </Modal>
  <Modal isVisble={showModal1} onClose={() => setShowModal1(state => !state)}>
    <div className="p-6">
    <h1>Editar Contato</h1>
    </div>
    
  </Modal>
  
  <Modal isVisble={showModal2} onClose={() => setShowModal2(state => !state)}>
    <div className="p-6">
    <h1>Excluir Contato</h1>
    </div>
    
  </Modal>
  </>



  )
}