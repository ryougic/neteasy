import axios from '../services/index'
import React, { useEffect, useState } from 'react'
import { Popup, Cell, Button ,Dialog } from 'react-vant'
import '../css/self.css'
export default function Self(props) {
  const [visible, setVisible] = useState(false)
  const [login,setLogin] = useState(true)
  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  },[])
  function getValue(){
    let [str,setStr] = useState('')
    return{
      value:str,
      onChange:(e)=>{setStr(e.target.value)}
    }
  }
  function loginUser(username,pwd){
    axios.post('/auth/loginByWeb',{username,pwd}).then(res=>{
      if(res.errno === 0){
        console.log(res.data.token)
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('userInfo',JSON.stringify(res.data.userInfo))
        setLogin(true)
        setVisible(false)
      }
    })
  }
  let user = getValue()
  let pwd = getValue()
  return (
    <div>
      <div id="selfTop">
        <div className='selfTopLeft'>
          <img src="" alt="" />
          {localStorage.getItem('token')?<span>{
            JSON.parse(localStorage.getItem('userInfo')).username
            }</span>:<span><a  onClick={() => setVisible(true)} >点击登录</a></span>}
        </div>
        <div className='selfTopRight'> {login?<Cell
        title='×'
        style={{background:'#333'}}
        onClick={() =>
          Dialog.confirm({
            title: '退出登录',
            message: '您确定退出登录吗？',
          })
            .then(() => {
              localStorage.removeItem('token')
              localStorage.removeItem('userInfo')
              setLogin(false)
              console.log(login)
            })
            .catch(() => {
              console.log('catch')
            })
        }
      />:'>'} </div>
      </div>
      <div>
        <Popup
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
        >
          <div style={{ padding: '80px 150px' }}>
            账号<input type="text" {...user} />
            密码<input type="password" {...pwd} />
            <div className='demo-button' style={{margin:'5px auto'}}>
              <Button type='primary' block round onClick={()=>{
                loginUser(user.value,pwd.value)
              }} >
                登录
              </Button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  )
}
