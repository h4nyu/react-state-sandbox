import React from 'react';
import {StoreA, StoreB} from './store';
import FormA from './FormA';
import FormB from './FormB'; 

export default function(){
  return (
  <StoreA.Provider>
    <FormA/>
    <StoreB.Provider>
      <FormB/>
    </StoreB.Provider>
  </StoreA.Provider>
  )
}
