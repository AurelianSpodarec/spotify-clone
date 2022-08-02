import { useEffect } from "react";
import { getFeaturedPlaylists } from "services/spotify/api/playlist/playlist";
  


function Home() {

    async function test() {
        // const res = await getBrowseCategories();
        // const res = await getCurrentUserprofile();
        // const res = await getUserProfileByID("6lrt7LngdzxaQtLIXMraSR");
        const res = await getFeaturedPlaylists()
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