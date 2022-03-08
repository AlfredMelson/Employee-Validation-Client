import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { UMThemeProvider } from './style'
import './style/global.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <UMThemeProvider>
        <CssBaseline>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path='/*' element={<App />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </CssBaseline>
      </UMThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
