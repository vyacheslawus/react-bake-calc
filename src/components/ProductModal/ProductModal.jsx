import { useEffect, useRef } from "react"
import "./ProductModal.css"
import { createPortal } from "react-dom"

export default function ProductModal({ children, open }) {

  const modal = useRef();

  if (open) {
    modal.current.showModal()
    console.log(modal)

  }






  return createPortal(
    <dialog ref={modal}>{children}</dialog>,
    document.querySelector('.modal')
  )
}