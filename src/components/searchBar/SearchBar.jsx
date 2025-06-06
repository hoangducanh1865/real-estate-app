import './searchBar.scss'
import { useState } from "react"

const types = ["buy", "rent"]

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        // setQuery(function(previousState) {
        //     return {
        //         type: type,            // New type value
        //         location: prev.location,    // Copied from previous state
        //         minPrice: prev.minPrice,    // Copied from previous state
        //         maxPrice: prev.maxPrice     // Copied from previous state
        //     }
        // })
        // OR
        setQuery(prev => ({ ...prev, type: val }))
    }

    return (
        <div className='searchBar'>
            <div className='type'>
                {/* <button onClick={() => switchType("buy")}>Buy</button>
                <button onClick={() => switchType("rent")}>Rent</button> */}
                {/* OR */}
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type == type ? "active" : ""}>
                        {type}
                    </button>
                ))}

            </div>
            <form>
                <input type='text' name='location' placeholder='City Location' />
                <input type='number' name='minPrice' min={0} max={10000000} placeholder='Min Price' />
                <input type='number' name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar