import React, { useEffect, useState,require } from 'react';
import { Search, Swiper,Toast  } from 'react-vant';
import '../css/Home.css'
import axios from '../services/index'
import BrandList from './children/BrandList';
import Channel from './children/Channel';
import NewGoodsList from './NewGoodsList';
import Swipe from './children/Swipe'
import TopSwipe from './children/TopSwipe';
import CategoryList from './children/CategoryList';
export default function Home() {
    const [value, setValue] = useState('');
    const [item, setItem] = useState([])
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const [banner,setBanner] = useState([])
    const [channel,setChannel] = useState([])
    const [brandList,setBrandList] = useState([])
    const [newGoodsList,setNewGoodsList] = useState([])
    const [categoryList,setCategoryList] = useState([])
    const [topicList,setTopicList] = useState([{
        item_pic_url:"https://yanxuan.nosdn.127.net/14943267735961674.jpg",
        id:123
    }])
    const [topSwipe,setTopSwipe] = useState([])
    const [images,SetImages] = useState([])
    useEffect(()=>{
        axios.get('/index/index').then(res=>{
            if(res.errno === 0){
                setBanner(res.data.banner)
                setChannel(res.data.channel)
                setBrandList(res.data.brandList)
                setNewGoodsList(res.data.newGoodsList)
                setTopicList(res.data.topicList)
                setTopSwipe(res.data.banner)
                setCategoryList(res.data.categoryList)
            }
        })
    },[])
    return (
        <div id='HomeContent'>
            <Search
                shape="round"
                background="#fff"
                value={value}
                onChange={setValue}
                placeholder="请输入搜索关键词"
            />
            <TopSwipe topSwipe={topSwipe} />
            <Channel channel={channel} />
            <BrandList brandList={brandList}   />
            <NewGoodsList newGoodsList={newGoodsList} />
            <Swipe topicList={topicList}  />
            {
                categoryList.map(item=><CategoryList key={item.id} data={item} /> )
            }
        </div>
    )
}
