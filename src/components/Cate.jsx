import axios from '../services';
import React, { useEffect, useState } from 'react';
import { Sidebar, Toast, Search } from 'react-vant';
import '../css/cate.css'
export default () => {
  const [active, setActive] = useState(0);
  const [cate, setCate] = useState([]);
  const [value, setValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState({})
  const [subCategoryList, setSubCategoryList] = useState([])
  function targetFn(id){
    axios.get('/catalog/current?id='+id).then(res=>{
      if(res.errno === 0){
        setCurrentCategory(res.data.currentCategory)
        setSubCategoryList(res.data.currentCategory.subCategoryList)
      }
    })
  }
  useEffect(() => {
    axios.get('/catalog/index').then(res => {
      if (res.errno === 0) {
        setCate(res.data.categoryList)
        setCurrentCategory(res.data.currentCategory)
        setSubCategoryList(res.data.currentCategory.subCategoryList)
      }
    })
  }, [])
  return (
    <div className='cateDIv'>
      <Search
        shape="round"
        background="#fff"
        value={value}
        onChange={setValue}
        placeholder="请输入搜索关键词"
      />
      <div className=''></div>
      <Sidebar
        value={active}
        onChange={(v) => {
          setActive(v);

        }}
      >
        {
          cate.map(item => {
            return (
              <Sidebar.Item key={item.id} contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title={item.name} onClick={()=>{
                targetFn(item.id)
              }} >
                <div className='cateRightContent'>
                  <div id="cataRightTopImg">
                    <img src={currentCategory.banner_url} alt="" />
                  </div>
                  <div id='subTitle'>
                    <hr />
                    <span>{currentCategory.name}</span>
                    <hr />
                  </div>
                  <ul id="cateMainContent">
                    {
                      subCategoryList.map(item=><li key={item.id}>
                        <img src={item.wap_banner_url} alt="" />
                        {item.name}
                      </li>)
                    }
                  </ul>
                </div>
              </Sidebar.Item>
            )
          })
        }
      </Sidebar>
    </div>
  );
};