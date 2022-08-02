import { useDispatch, useSelector  } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);

    const globalNavigationHistory = global.navigationHistory;

    // console.log("gg", globalNavigationHistory)
    return (
        <header className="sticky z-10 top-0 h-[64px] bg-[#121212]">
        <div className="flex px-8 py-3">
        

            <div className="flex items-center space-x-6">
                <button className="rounded-full bg-red-[#0a0a0a]" aria-hidden="true" aria-label="Go back">
                    <svg role="img" height="24" width="24" className="fill-gray-300 h-[22px] w-[22px]" viewBox="0 0 24 24">
                        <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                    </svg>
                </button>
                        
                <button className="rounded-full bg-red-[#0a0a0a]" aria-hidden="true" aria-label="Go forward">
                    <svg role="img" height="24" width="24" className="fill-gray-300 h-[22px] w-[22px]" viewBox="0 0 24 24">
                        <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                    </svg>
                </button>
            </div>

            <div className="ml-8">
                <input className="rounded-full p-2 w-[364px]" placeholder="Artists, songs, or podcasts" />
            </div>


        </div>
        </header>
    )
}

export default Header;