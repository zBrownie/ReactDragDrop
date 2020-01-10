import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
*{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
}

html,body, #root{
    height: 100%;
    
}

body{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #ecf1f8;
    color:#333;
    -webkit-font-smoothing: antialiased !important;
}

ul{
    list-style:none;
}
`;

export default Global;
