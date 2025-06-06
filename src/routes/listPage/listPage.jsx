import Map from '../../components/map/Map'
import { listData } from '../../lib/dummydata'
import './listPage.scss'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'

function ListPage() {
    const data = listData;

    return <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data} /> {/* Pass the data to the Map component */}
        </div>
    </div>
}

export default ListPage