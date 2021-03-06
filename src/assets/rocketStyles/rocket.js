import styled from 'styled-components';

export const RocketContainer = styled.div`
  display: flex;
  margin: 50px 70px 0 70px;
  gap: 70px;
  height: 100%;
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
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
   @media(max-width:786px){
    img {
      width: 200px;
      heigth: 200px;
    }
   }
`;

export const RocketTextContainer = styled.div`
padding: 5px;
margin-top: 20px;
`;

export const RocketTitle = styled.h2`
  
  color: var(--bgdark);
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
`;

export const RocketContent = styled.p`
  font-size: 14px;
  color: var(--bgdark);
  line-height: 25px;
  padding-top: 10px;
  font-family: 'Poppins', sans-serif;
  @media(max-width:768px){
    font-size: 12px;
  }
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

export const RocketButtonWhite = styled.button`
  font-family: 'Poppins', sans-serif;
  background: #6c757d;
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
