import styled from "styled-components";

export const MainStyle = styled.div<{ bgcolor: string }>`
  body {
    background: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
`;
export const SwiperContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const SwiperSlideCustom = styled.div`
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
`;

export const SwiperCover = styled.div`
  background-image: url("http://lorempixel.com/600/600/nature/2");
`;
