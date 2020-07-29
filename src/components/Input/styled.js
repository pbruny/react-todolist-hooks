import styled from 'styled-components'

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  margin-top: 64px;

  input {
    flex: 1;
    height: 48px;
    border: none;
    padding: 0 16px;
    border-bottom: 1px solid #fff;
    color: #fff;
    background: none;
    outline: none;
    font-size: 24px;
    font-family: 'Open Sans', sans-serif;
    max-width: 100%;

    &::placeholder {
      color: #f6f6f6;
    }
  }

  button {
    border: none;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    background: none;
    outline: none;
    padding: 0 24px;
  }

  @media screen and (max-width: 480px) {
    input {
      font-size: 16px;
      padding: 0;
    }

    button {
      padding: 0;
    }
  }
`

export const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  margin-top: 5vh;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.2);

  & + div {
    margin-top: 16px;
  }

  &:last-child {
    margin-bottom: 16px;
  }

  svg {
    margin: 0 8px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    color: #000;

    svg {
      color: #46489E;
    }
  }

  p.done {
    text-decoration: line-through;
  }
`