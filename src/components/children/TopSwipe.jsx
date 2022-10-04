import React from 'react';
import { Swiper } from 'react-vant';
import '../../css/TopSwipe.css';

export default ({topSwipe}) => {
  return (
    <div className="demo-swiper">
      <Swiper disable >{
        topSwipe.map(item=><Swiper.Item key={item.id}>
            <div>
                <img style={{padding:'0'}} src={item.image_url} alt="" />
            </div>
        </Swiper.Item>)
      }</Swiper>
    </div>
  );
};