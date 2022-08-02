import { useEffect } from "react";

import { getBrowseByID, getBrowseCategories } from "services/spotify/api/browse/browse";


function Home() {

    async function test() {
        const res = await getBrowseCategories();
        // const res2 = await getBrowseByID("toplists");

        console.log(res)
        // console.log(res2)
    }

    useEffect(() => {
        test()
    }, [])

    return (
        <div className="bg-cyan-500">
            Home
        </div>
    )
}

export default Home;