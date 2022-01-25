import styled from 'styled-components';

export const RocketContainer = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 50px;
  gap: 70px;
  height: 100%;
`;

export const RocketImgContainer = styled.div`
   border-radius: 36px;
   img{
      width: 300px;
      heigth: 300px;
      object-fit: cover;
      border-radius: 6px;
      margin-top: 20px; 
      filter: drop-shadow(12px 12px 25px rgba(0,0,0,0.2));
   }
`;

export const RocketTextContainer = styled.div``;

export const RocketTitle = styled.h2`
  color: var(--bgdark);
`;

export const RocketContent = styled.p`
  font-size: 14px;
  color: var(--bgdark);
  line-height: 25px;
`;

export const RocketButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background: var(--bgblue);
  border: none;
  color: var(--bgwhite);
  padding: 10px 15px;
  cursor: pointer;
  &:hover{
    opacity: 80%;
  }
`;

export const RocketBadge = styled.div`
  background: var(--bginfo);
  width: 100px;
  text-align: center;
  border-radius: 6px;
  color: var(--bgwhite);
`;
