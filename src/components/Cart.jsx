import axios from '../services/index';
import React, { useState, useRef, useEffect } from 'react'
import { ProductCard, Tag, Button, Checkbox } from 'react-vant';
import '../css/Cart.css'
export default function Cart() {
  const [checkAll, setCheckAll] = useState(['a'])
  const [list,setList] = useState([])
  const [seleFlag,setSelectFlag] = useState(true)
  useEffect(()=>{
    axios.get('/api/cart/index').then(res=>{
      setList(res.data.cartList)
      getTotal(res.data.cartList)
    })
  },[])
  const [ren,setRen] = useState(false)
  const [total,setTotal] = useState(0)
  function getTotal(list){
    let cur = 0
    list.forEach(item=>{
      item.checked?cur+=item.retail_price:0
    })
    setTotal(cur)
  }
  function setAllSelect(list){
    list.every(item=>item.checked)?setSelectFlag(true):setSelectFlag(false)
  }
  function changeSelect(id){
    for(let i=0;i<list.length;i++){
      if(list[i].goods_id===id){
        list[i].checked = (list[i].checked?0:1)
        setList([...list])
        setAllSelect(list)
        return getTotal(list)
      }
    }
  }
  return (
    <div className='cartMain'>
      <ul className='cartListsUl'>
        {
          list.map(item=>(<li key={item.id} className='cartListLi'>
          <input key={item.goods_id} type="checkbox" className='cartListInp' checked={item.checked} onChange={()=>{changeSelect(item.goods_id)}} />
          <div className='cartListChild'>
            <ProductCard
              num={item.number}
              price={item.market_price}
              title={item.goods_name}
              thumb={item.list_pic_url}
            />
          </div>
        </li>))
        }
      </ul>
      <div className="allSelect">
        <div className='allSelect1'>
          <input type="checkbox" checked={seleFlag} onChange={(e)=>{
            list.forEach(item=>item.checked=e.target.checked)
            setList([...list])
            setSelectFlag(e.target.checked)
            getTotal(list)
          }}  />
          <span>全选</span>
        </div>
        <div className='allSelect2'>
          <span>合计：</span>
          <span className='allSelect2_2'>￥{total}</span>
        </div>
        <div className='demo-button'>
          <Button color='linear-gradient(to right, #ff6034, #ee0a24)' round type='info'>
            提交订单
          </Button>
        </div>
      </div>
    </div>)
}


