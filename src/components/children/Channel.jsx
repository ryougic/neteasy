import React from 'react'
import '../../css/Channel.css'
export default function Channel({channel}) {
  return (
    <ul className='channelUl'>
        {
            channel.map(item=><li key={item.id}>
                <img src={item.icon_url} alt={item.name} />
                <span>{item.name}</span>
            </li>)
        }
    </ul>
  )
}
