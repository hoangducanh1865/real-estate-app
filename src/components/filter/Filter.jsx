import './filter.scss'

function Filter() {
    return (
        <div className='filter'>
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label> {/*Q*/}
                    <input type="text" id="city" name="city" placeholder='City Location' /> {/*Q*/}
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label> {/*Q*/}
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label> {/*Q*/}
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label> {/*Q*/}
                    <input type="number" id="minPrice" name="minPrice" placeholder='any' /> {/*Q*/}
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label> {/*Q*/}
                    <input type="number" id="maxPrice" name="maxPrice" placeholder='any' /> {/*Q*/}
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label> {/*Q*/}
                    <input type="text" id="bedroom" name="bedroom" placeholder='any' /> {/*Q*/}
                </div>

                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter