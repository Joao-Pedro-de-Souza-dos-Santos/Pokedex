import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './pages/App/index.tsx'
import { GlobalStyles } from './styles/reset.ts'
import { ThemeProvider } from 'styled-components'
import { appTheme } from './styles/theme.ts'
import { AppRoutes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
    <AppRoutes />
    <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
