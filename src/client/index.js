import React from 'react'
import App from './App'

const Index = props =>
  <html>
    <head>
      <title>{props.title}</title>
      <meta name='author' content={props.author} />
      <meta name='keywords' content={props.keywords} />
      <meta name='description' content={props.description} />
    </head>
    <body>
      <App />
    </body>
  </html>

export default Index
