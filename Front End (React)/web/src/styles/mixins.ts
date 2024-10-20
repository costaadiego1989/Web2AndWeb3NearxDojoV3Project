import { css } from 'styled-components'

export const mixins = {
  fonts: {
    text: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.5rem;
      line-height: 100%;
      font-weight: 100;
    `,   
    ["roboto-light"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-style: normal;
    `,    
    ["roboto-regular"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: normal;
    `,    
    ["roboto-medium"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-style: normal;
    `,    
    ["roboto-bold"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-style: normal;
    `,    
    ["roboto-black"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-style: normal;
    `,
    button: {
      wallet: css`
        font-size: 16px;
        font-weight: bold;
        color: white;
      `
    }
  },
}