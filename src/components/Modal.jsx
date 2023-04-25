

export const Modal = ({isVisble, onClose, children }) => {
  
  const handleClose = (e) => {  
    if(e.target.id === 'wrapper') onClose()
  }

  if (!isVisble) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    id="wrapper" onClick={handleClose}
    >
  
      <div className="w-[600px] flex flex-col"  >
     <button onClick={() => onClose()} className="text-zinc-200 text-xl place-self-end" >X</button>
     <div className="bg-zinc-100 p-2 rounded">
      {children}
     </div>
      </div>
    </div>
  )
}
