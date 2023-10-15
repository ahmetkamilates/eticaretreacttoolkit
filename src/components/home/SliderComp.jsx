import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
          <div className='flex items-center bg-gray-100 px-6'>
            <div className=''>
              <div className='text-6xl font-bold'>
                En Kaliteli Ayakkabılar Burada
              
              </div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis cum commodi facilis saepe sapiente dolores molestias ducimus mollitia temporibus sequi, impedit provident. Perferendis aperiam ratione dolorem quis rerum blanditiis?</div>
              <div className='border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center bg-gray-200' ></div>
            </div>
                    
          </div>
          <img src="" alt="#" />
          
          <div className='flex items-center bg-gray-100 px-6'>
          <div className=''>
              <div className='text-6xl font-bold'>
                En Kaliteli Ayakkabılar Burada
              
              </div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis cum commodi facilis saepe sapiente dolores molestias ducimus mollitia temporibus sequi, impedit provident. Perferendis aperiam ratione dolorem quis rerum blanditiis?</div>
              <div className='border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center bg-gray-200' ></div>
            </div>
           <img src="" alt="#" />
          </div>
          
        </Slider>
    </div>
  )
}

export default SliderComp