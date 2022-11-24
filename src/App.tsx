import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./components/homePage'))
const FillForm = lazy(() => import('./components/fillForm'))
function App() {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/form' element={<FillForm />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
