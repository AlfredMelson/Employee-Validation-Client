import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { UMThemeProvider } from './style'
import './style/global.css'

// create entry point using unique id from Document
const rootElement = document.getElementById('root')
// test for root element prior to invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
// create root
const approot = createRoot(rootElement)
// initial render

approot.render(
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
  </React.StrictMode>
)
