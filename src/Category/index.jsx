import React, { Component } from "react";
import {Container, SwiperReact, SwiperSlide1} from './style'
import House2 from './assets/images/House2.png'
import House3 from './assets/images/House3.png'
import House4 from './assets/images/House4.png'
import Home from './assets/images/Home.png'
import Apartment from './assets/images/Apartment.png'
import Office from './assets/images/Business-and-trade.png'
import Villa from './assets/images/Villa.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper';

class Category extends Component {
    render() {
        return(
            <Container>
                <Container.Header>Category</Container.Header>
                <Container.Paragraph>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Paragraph>
                <SwiperReact 
                slidesPerView={4}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }} 
                navigation={true} 
                modules={[Pagination, Navigation]} 
                className='mySwiper'>

                    <SwiperSlide1 style={{backgroundImage: `url(${House2})`}}>
                        <SwiperSlide1.Img>
                            <img src={Home} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>House</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House2})`}}>
                        <SwiperSlide1.Img>
                            <img src={Apartment} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Apartment</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House3})`}}>
                        <SwiperSlide1.Img>
                            <img src={Office} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Office</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House4})`}}>
                        <SwiperSlide1.Img>
                            <img src={Villa} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Villa</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House3})`}}>
                        <SwiperSlide1.Img>
                            <img src={Office} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Office</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House2})`}}>
                        <SwiperSlide1.Img>
                            <img src={Home} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>House</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House4})`}}>
                        <SwiperSlide1.Img>
                            <img src={Villa} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Villa</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House3})`}}>
                        <SwiperSlide1.Img>
                            <img src={Office} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Office</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    <SwiperSlide1 style={{backgroundImage: `url(${House2})`}}>
                        <SwiperSlide1.Img>
                            <img src={Apartment} alt="Icons" />
                        </SwiperSlide1.Img>
                        <SwiperSlide1.Paragraph>Apartment</SwiperSlide1.Paragraph>
                    </SwiperSlide1>
                    
                </SwiperReact>
            </Container>
        )
    }
}
export default Category