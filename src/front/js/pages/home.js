import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
      
      <div id='hero-body' className="flex justify-center items-center mt-0 mb-0 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-300 h-screen">
            
            <div id='hero' className='d-flex flex-column'  >
                <h1 className='text-5xl text-gray-500 font-bold text-center'>
            
                </h1>
                
            </div>
        </div>
       
        <div className='border-y-4 flex justify-center items-center py-4 gap-6 shadow'>
                <div onClick={() => actions.logOut()} className='flex items-center gap-2 cursor-pointer'>
                    <img src='https://numero.twic.pics/2024-03/taylor-swift-album-numero-magazine1.jpg?twic=v1/quality=83/truecolor=true/output=jpeg' className='flag h-10 w-10 bg-orange-300 rounded-full top-1 start-1' />
                    <p className="font-bold text-xl">Salir</p>
                </div>
             
            </div >




    
    </>
	);
};
