import React from 'react'
import { lazy, Suspense } from 'react'
const Products = lazy(() => import('./components/API_USE/Product'))

const ApiUse = () => {
  return (
    <div>
        <Suspense fallback={<h4>Loading...</h4>}>
        <Products />
      </Suspense>
    </div>
  )
}

export default ApiUse