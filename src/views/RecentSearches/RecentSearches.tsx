import { useDispatch, useSelector } from "react-redux";
import { Card, Shelf } from "components";



function RecentSearches() {
    const search = useSelector((state:any) => state.search)

    return (
        <Shelf title="Recent searches" linkText="Clear recent searches">
        <div className="grid gap-6 grid-cols-6">

            {search.recentSearches.slice(0, 6).map((item:any) => {
                    return (
                        <Card 
                            key={item.id}
                            item={item}
                            canDelete={true}
                            fetchStatus="success"
                        />
                    )
                })
            }

        </div>
        </Shelf>
    )
}

export default RecentSearches;