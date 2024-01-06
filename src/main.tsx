import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './pages/App/index.tsx'
import { GlobalStyles } from './styles/reset.ts'
import { ThemeProvider } from 'styled-components'
import { appTheme } from './styles/theme.ts'
import { AppRoutes } from './routes/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
      <AppRoutes />
      <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider> 
  </React.StrictMode>,
)
