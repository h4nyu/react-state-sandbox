import React from 'react'
import { DataStore, User } from './store'

export default function UserList () {
  const { users, fetch } = DataStore.useContainer()

  React.useEffect(() => {
    fetch()
  }, [])
  return (
    <>
      {
        users.map((u:User) => <div key={u.id}>id:{u.id} name:{u.name}</div>).toList()
      }
    </>
  )
}
