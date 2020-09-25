import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  /* 
  nv - Navigation
  ct - Content 
  */
  grid-template:
    "nv nv nv" auto
    "ct ct ct" auto
    "ct ct ct" auto
    10px auto auto;
`;
