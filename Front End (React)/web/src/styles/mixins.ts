import { css } from 'styled-components'

export const mixins = {
  fonts: {
    text: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.5rem;
      line-height: 100%;
      font-weight: 100;
    `,
    ["roboto-thin"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-style: normal;
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
    ["roboto-thin-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-style: italic;
    `,    
    ["roboto-light-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-style: italic;
    `,    
    ["roboto-regular-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: italic;
    `,    
    ["roboto-medium-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-style: italic;
    `,    
    ["roboto-bold-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-style: italic;
    `,    
    ["roboto-black-italic"]: css`
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-style: italic;
    `    
  },
}