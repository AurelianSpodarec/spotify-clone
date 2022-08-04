import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useLocation } from "react-router-dom";
import { nextHistoryItem, prevHistoryItem, setHistoryItem } from "store/slices/global/globalSlice";

function HistoryButtons() {
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);

    const globalHistory = global.navigationHistory;

    // TODO
    let locationnn = useLocation();
    const location = window.location.pathname

    // If user presses back button, or prev, don't add it to the history
    
    // useEffect(() => {
    //     dispatch(setHistoryItem(location))
    // }, [locationnn])


    // console.log(globalHistory)
    function onPrev() {
        // dispatch(prevHistoryItem())
    }

    function onNext() {
        // dispatch(nextHistoryItem())
    }

    return (
        <div className="flex items-center space-x-6">
            <button onClick={() => onPrev()} className={`${globalHistory.activeIndex === 0 ? "" : "bg-[#0a0a0a]"} rounded-full `} aria-hidden="true" aria-label="Go back">
                <svg role="img" height="24" width="24" className="fill-gray-300 h-[22px] w-[22px]" viewBox="0 0 24 24">
                    <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                </svg>
            </button>
                    
            <button onClick={() => onNext()} className={`${globalHistory.activeIndex === globalHistory.items.lenght - 1 ? "bg-red-500" : ""} rounded-full bg-red-[#0a0a0a]`} aria-hidden="true" aria-label="Go forward">
                <svg role="img" height="24" width="24" className="fill-gray-300 h-[22px] w-[22px]" viewBox="0 0 24 24">
                    <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                </svg>
            </button>
        </div>
    )
}

export default HistoryButtons;