import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
const HomePage = lazy(() => import('./components/homePage'))
const FillForm = lazy(() => import('./components/fillForm'))
const Demo = lazy(()=>import('./components/demo'))
function App() {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/form' element={<FillForm />}></Route>
        <Route path='/Demo' element={<Demo />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
