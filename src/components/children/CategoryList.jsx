import React from 'react'
import '../../css/CategoryList.css'
export default function CategoryList({data}) {
  return (
    <div id='CategoryList'>
      <h3>{data.name}</h3>
      <ul>
        {
          data.goodsList.map(item=><li key={item.id}>
            <img src={item.list_pic_url} alt="" />
            <p>{item.name}</p>
            <span>￥{item.retail_price}元</span>
          </li>)
        }
      </ul>
    </div>
  )
}
