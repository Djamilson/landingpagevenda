import React from 'react'

import { LoadingProvider } from './loading'
import { ToastProvider } from './toast'
import { CartProduct } from './cartProduct'

const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <ToastProvider>
        <CartProduct>{children}</CartProduct>
      </ToastProvider>
    </LoadingProvider>
  )
}
export default AppProvider
