import React,{useEffect, useState} from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
import { Route, Switch, withRouter } from 'react-router-dom'
import Cate from './components/Cate'
import './App.css'
import Self from './components/Self'
import Cart from './components/Cart'
import AuthRoute from './components/AuthRoute'
import Spe from './components/Spe'
import Home from './components/Home'
export default withRouter((props) => {
  const [name, setName] = useState('/home')
  useEffect(()=>{
    setName('/home')
    // props.history.push('/home')
  },[])
  return (<div className='appDiv'>
    <Switch>
      <Route path='/cate' component={Cate} />
      <AuthRoute path='/cart' component={Cart}  setName={setName}  />
      <Route path='/self' component={Self} />
      <Route path='/spe' component={Spe} />
      <Route path='/home' component={Home} />
    </Switch>
    <div className='demo-tabbar'>
      <Tabbar value={name} onChange={(value)=>{
        setName(value)
        props.history.push(value)
        }}>
        <Tabbar.Item name='/home' icon={<HomeO />}>首页</Tabbar.Item>
        <Tabbar.Item name='/spe' icon={<Search />}>专题</Tabbar.Item>
        <Tabbar.Item name='/cate' icon={<FriendsO />}>分类</Tabbar.Item>
        <Tabbar.Item name='/cart' icon={<SettingO />}>购物车</Tabbar.Item>
        <Tabbar.Item name='/self' icon={<SettingO />}>我的</Tabbar.Item>
      </Tabbar>
    </div>
  </div>
  )
})
