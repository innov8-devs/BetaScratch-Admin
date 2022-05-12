import React from 'react'
import { createPopper } from '@popperjs/core'

export const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef<any>()
  const popoverDropdownRef = React.createRef<any>()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-end',
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  return (
    <>
      <a
        className="text-blueGray-500 block py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <i className="fas fa-bell"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'z-50 float-left mt-1 list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
        style={{ minWidth: '12rem' }}
      >
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="border-blueGray-100 my-2 h-0 border border-solid" />
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  )
}
