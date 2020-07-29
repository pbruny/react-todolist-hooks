import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #3D4D92;
    font-family: 'Open Sans', sans-serif;
  }
`

export const Container = styled.div`
  max-width: 1100px;
  padding: 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`