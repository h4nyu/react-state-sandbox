import React from 'react'
import { StoreA, StoreB, DataStore } from './store'
import FormA from './FormA'
import FormB from './FormB'
import UserList from './UserList'

export default function App () {
  return (
    <DataStore.Provider>
      <UserList/>
      <StoreA.Provider>
        <FormA/>
        <StoreB.Provider>
          <FormB/>
        </StoreB.Provider>
      </StoreA.Provider>
    </DataStore.Provider>
  )
}
