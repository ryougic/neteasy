import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-vant';
import { Arrow, ArrowLeft, Replay } from '@react-vant/icons'
import { Button } from 'react-vant'
import axios from '../services/index'
import '../css/spe.css'
export default function Spe() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(1);
    function getContent(page) {
        axios.get(`/api/topic/list?page=${page}&size=10`).then(res => {
            if (res.errno === 0) {
                setList(res.data.data)
            }
        })
       
    }
    useEffect(() => {
        getContent(page)
    }, [])
    return (
        <div className='spe'>
            <div className="speMain">
                <ul className='sMUl'>
                    {
                        list.map(item => <li key={item.id}>
                            <img src={item.scene_pic_url} alt={item.title} style={{ width: '100%' }} />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='speBtn'>
                <Button disabled={page===1?true:false}  onClick={() => {
                        getContent(page - 1)
                        setPage(page - 1)
                        window.scroll({
                            top:0
                        })
                }} icon={<ArrowLeft />}>上一页</Button>
                <Button disabled={page===2?true:false}  iconPosition='right' icon={<Arrow />}
                    onClick={() => {
                        getContent(page + 1)
                        setPage(page + 1)
                        window.scrollTo(0,0)
                    }
                    }
                >
                    下一页
                </Button>
            </div>
        </div>
    )
}
