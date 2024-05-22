import React from "react";
import "../../styles/certificado.css";
import certificado from "../../img/certificado.png";

export const Certificado = () => {

    return <>
     <div id='hero-body' className="flex justify-center items-center mt-0 mb-0 ">
            <div className="image ">
				<img className= "w-sm h-sm animate-jump-in animate-once animate-duration-[5000ms] " src={certificado} />
			</div>
            <div id='hero' className='d-flex flex-column'  >
                <h1 className='text-5xl text-gray-500 font-bold text-center'>
            
                </h1>
                
            </div>
        </div>
    
    </>


}