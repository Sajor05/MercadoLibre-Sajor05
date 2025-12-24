import LocateIcon from "../../assets/locate-icon.png"

/*     <div className="flex items-center cursor-pointer hover:border-[#0000001a] border border-transparent rounded-sm p-1 transition-all">
        <a href="#" className="flex items-center gap-1">
            <div className="flex items-center">
                <img src={LocateIcon} alt="ubicacion" className="w-5 h-6 object-contain" />                
            </div>
            <div className="flex flex-col leading-tight">
                <span className="text-zinc-500 text-xs">Enviar a</span>
                <span className="text-black font-normal">Capital federal</span>                
            </div>
        </a>
    </div> */

export const Locate = () => {
    return(
    <div className="flex items-center cursor-pointer hover:border-[#0000001a] border border-transparent rounded-sm transition-all">
        <a href="#" className="flex items-center gap-1">
            <div className="flex items-center">
                <img src={LocateIcon} alt="ubicacion" className="w-5 h-6 object-contain" /> 
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-zinc-500 text-xs">Enviar a</span>
                <span className="text-black text-[13px]">Capital federal</span>
            </div>
        </a>
    </div>);
}