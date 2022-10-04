import React from 'react'
import '../../css/BrandList.css'
export default function BrandList({ brandList }) {
    return (<div>
        <h1 id='BrandListH1'>品牌制造直供商</h1>
        <ul className='BrandListUl'>
            {
                brandList.map(item => <li key={item.id}>
                    <img src={item.pic_url} />
                    <h3>{item.name}</h3>
                    <span>￥{item.floor_price.toFixed(2)}</span>
                </li>)
            }
        </ul>
    </div>

    )
}
