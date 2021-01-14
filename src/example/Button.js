import styled from "styled-components"

export const Button = styled.button`
  color: ${props => props.color};
  background-color: green;
  font-size: ${prop => (prop.big ? "3rem" : "1rem")};
`
