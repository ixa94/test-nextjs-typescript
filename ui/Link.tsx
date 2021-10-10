import styled from "styled-components";

export const P = styled("p")`
text-decoration: none;
position: relative;
display: inline-block;
color: #000;
margin:0 25px;
text-decoration: none;
font-size:25px;
transition: color .3s ease-out;
&:before {
  content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #337AB7;
    transition: height .3s ease-out;
};
&:hover {
  color: #fff;
};
&:hover:before {
  height: 100%;
};

`;
