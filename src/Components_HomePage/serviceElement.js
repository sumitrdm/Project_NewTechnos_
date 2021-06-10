import styled from "styled-components";
export const ServicesContainer =styled.div `
height:600px;
width:100%;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
background: #010606;
margin-bottom: 50px;
padding:20px;
@media screen and (max-width: 1012px){
    height: 800px;
}
@media screen and (max-width: 768px){
    height: 1200px;
    padding:10px;
}
@media screen and (max-width: 480px){
    height: 1300px;
    padding:10px;
}
`;

export const ServicesWrapper=styled.div `
width:100%;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items: center;
grid-gap:16px;
padding: 10px 20px;
@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr;
    width:800px;
    height: 400px
    padding: 5px;
}
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding:10px;
    width:400px;
}
`;

export const ServicesCard = styled.div `
background:#fff;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
border-radius:10px;
max-height:390px;
padding:30px;
box-shadow:0 1px 3px rbga(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
}
@media screen and (max-width: 1012px){
    width:400px;
    height: 300px;
    padding:5px;
    
}
@media screen and (max-width: 900px){
    width:300px;
    height: 300px;
    padding:5px;
    
}
`;

export const ServicesIcon =styled.img `
height:160px;
width: 160px;
margin-bottom:10px;
border-radius:10px;

`;

export const ServicesH1 = styled.h1 `
font-size:2.5rem;
color: #fff;
margin-bottom: 64px;
@media screen and (max-width: 480px){
    font-size:2rem;
}
`;

export const ServicesH2 =styled.h2 `
font-size:1rem;
margin-bottom:10px;
`;

export const ServicesP = styled.p `
font-size: 1rem;
text-align: center;
`;