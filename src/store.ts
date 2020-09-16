import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { Map } from 'immutable'

function useStoreA () {
  const [name, setName] = useState('')
  return { name, setName }
}

export const StoreA = createContainer(useStoreA)

function useStoreB () {
  const [name, setName] = useState('')
  return { name, setName }
}

export const StoreB = createContainer(useStoreB)

export type User = {
  id:string,
  name: string
}
export type Users = Map<string, User>;
function useDataStore () {
  const [users, setUsers] = useState<Users>(Map())
  const fetch = async () => {
    setUsers(Map({
      a: {
        id: 'a',
        name: 'aa'
      },
      b: {
        id: 'b',
        name: 'bb'
      }
    }))
  }
  return { users, fetch }
}
export const DataStore = createContainer(useDataStore)
