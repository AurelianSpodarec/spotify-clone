import react, { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setClickedPlayClose } from 'store/slices/global/globalSlice';


function PlayModal(props:any) {

    const { item, isOpen, handleClose } = props;
    
    return (
        <div onClick={() => handleClose()} className="flex fixed z-50 top-0 right-0 bottom-0 left-0" style={{ "backgroundColor": "rgba(0,0,0,.9)" }}>

            <div  onClick={(e) => e.preventDefault()} className="flex align-center justify-between max-w-[814px]" style={{ "backgroundColor": "rgb(149, 110, 91)" }}>

            <div className="flex">
                <div>
                    <img src={item.item.images[0].url} alt="Alt Image" />
                </div>
                <div>
                    <div>
                        <h2>Start listening with a free Shopify account</h2>
                        <button>Sign Up Free</button>
                        <button>Download App</button>
                    </div>

                    <div>
                        <span>Already have an account?</span>
                        <span>Log In</span>
                    </div>
                </div>
            </div>

            </div>

        </div>
    )
}

function PortalPlay() {
    const doc = document.getElementById('root');

    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);

    
    function handleClose() {
        dispatch(setClickedPlayClose())
    }

    // console.log(global)
    if(!doc) return <></>
    if(!global.clickedPlay.isOpen) return <></>

    console.log("portal", global)
    return ReactDOM.createPortal( 
        <PlayModal 
            item={global.clickedPlay} 
            handleClose={handleClose}
        /> 
    , doc)
}

export default PortalPlay;