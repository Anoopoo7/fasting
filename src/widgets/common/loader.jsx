import React from 'react'

export default function Loader({ children, loading }) {
  return (
    <div>{loading ?
      <div className="loader-bg">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> : children}</div>
  )
}
