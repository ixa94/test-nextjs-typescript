import styled from "styled-components";

export const Input = styled("input")`
padding: 10px;
 font-size: 30px;
 border: 10px solid rgba(255, 255, 255, .5);
 @include box-shadow(
 0 2px 10px rgba(0, 0, 0, .25) inset,
 0 2px 10px rgba(0, 0, 0, .25));
 @include border-radius(10px);
 background: rgb(239 224 224 / 56%);
 @include appearance(none);
 outline: none;
 color: #333;
`;
