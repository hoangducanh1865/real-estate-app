import Card from '../card/Card'
import { listData } from '../../lib/dummydata'
import './list.scss'

function List(){
  return (
    <div className='list'>
        {listData.map((item) => (
            <Card key={item.id} item={item} /> // QUESTION: What is Card component?
        ))}
    </div>
  )
}

export default List