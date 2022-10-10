import styled from "styled-components";
import '../index.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled.div`
    width: 100%;
    padding: 96px 0;
    padding-left: 20px;
    padding-right: 20px; 
`
Container.Header = styled.h1`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: var(--darkBlue);
    text-align: center;
`
Container.Paragraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--darkGrey);
    margin-top: 8px;
    text-align: center;
`

const SwiperReact = styled(Swiper)`
    width: 100%;
    height: 420px;
    padding-bottom: 20px; 
`
const SwiperSlide1 = styled(SwiperSlide)`
    width: 285px !important;
    height: 350px; 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 3px;
    margin-top: 30px;
`
SwiperSlide1.Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    margin-bottom: 24px;
`
SwiperSlide1.Paragraph = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: var(--white);
`
export {Container, SwiperReact, SwiperSlide1}