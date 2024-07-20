import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div>
    Hello space{JSON.stringify(params)} hh</div>
  )
}

export default page