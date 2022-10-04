import React from 'react';
import { Swiper, Toast,Image  } from 'react-vant';
import '../../css/Swipe.css'
export default ({ topicList }) => {
  console.log(topicList)
  return (
    <div className="demo-swiper">
      <Swiper slideSize={100}>{topicList.map((image) => (
        <Swiper.Item key={image.id}>
          <img style={{width:'100%',height:'200px',padding:'0 30px 0 0'}} src={image.item_pic_url} />
          <p className='swiperP1'>{image.title}</p>
          <span className='swiperSpan1' style={{width:'355px'}} >{image.subtitle}</span>
        </Swiper.Item>
      ))}</Swiper>
    </div>
  );
};
