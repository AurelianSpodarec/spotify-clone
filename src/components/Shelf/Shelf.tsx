

function Shelf(props:any) {
    const { children } = props;

    return (
        <div>
            <div className="justify-between">
                <h2>Header</h2>

                <button>See All</button>
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Shelf