import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner';

import './css/index.css'
import Home from './pages/Home.tsx'
import ResumePage from './pages/Resume.tsx'
import Layout from './pages/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
)
