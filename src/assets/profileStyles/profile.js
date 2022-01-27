import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 100px 0 100px;
    display: flex;
    gap: 100px;

    @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
`;
export const MissionContainer = styled.div`
  flex: 1;
`;

export const MissionTitle = styled.h2`
font-size: 2.0rem`;

export const MissionMenu = styled.ul`
   list-style-type: none;
`;

export const MissionList = styled.li`
   color: var(--bgdark);
   font-size: 1.2rem;
   border: 2px solid #47525d;
   padding: 10px;
`;

export const RocketContainer = styled.div`
flex: 1`;

export const RocketTitle = styled.h2`
    font-size: 2.0rem;
`;

export const RocketMenu = styled.ul`
   padding: 0;
   margin: 0;
`;

export const RocketList = styled.li`
border: 2px solid #47525d;
padding: 10px;
`;
