
interface Card2Props {
    key: number;
    fetchStatus: string;
    href: string;
    item: {
        href: string;
        name: string;
        icons: [
            {
                url: string
            }
        ]
    }
}

function Card2(props:Card2Props) {
    const { key, item, fetchStatus } = props;

    if(fetchStatus === "fetching") {
        return (
            <div key={key} className="w-full h-24 border-2 rounded-md mx-auto mt-20">
            <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">

                <div className="w-12 bg-gray-300 h-12 rounded-full "></div>

                <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                </div>

            </div>
            </div>
        )
    } else {
        return (
            <div key={key} className="relative rounded-lg overflow-hidden">
            <a href={item && item.href} className="block h-[180px]">

                <h3 className="p-4 text-white text-2xl font-bold">{item.name}</h3>
                <img className="absolute bottom-0 right-0 h-24 w-24" style={{ transform: "rotate(25deg) translate(18%,-2%)" }} src={item.icons[0].url} alt={item.name} />
             
            </a>
            </div>
        )    
    }
    
}

export default Card2;