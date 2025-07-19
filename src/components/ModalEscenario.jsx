export default function ModalEscenario({ children, onCerrar }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onCerrar} 
    >
      <div
        className="bg-white w-[600px] h-[500px] rounded-xl shadow-2xl p-2 relative"
        onClick={(e) => e.stopPropagation()} 
      >
   
        {children}
      </div>
    </div>
  );
}
