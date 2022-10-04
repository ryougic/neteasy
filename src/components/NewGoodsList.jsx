import React from 'react'
import '../css/NewGoodsList.css'
export default function NewGoodsList({newGoodsList}) {
  return (
    <div className='nglContent'>
        <h1>周一周四·新品首发</h1>
        <ul>
        {
            newGoodsList.map(item=><li key={item.id}>
                <img src={item.list_pic_url} />
                <p>{item.name}</p>
                <span>￥{item.retail_price.toFixed(2)}</span>
            </li>)
        }
        </ul>
    </div>
  )
}
