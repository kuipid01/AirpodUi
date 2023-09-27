/* eslint-disable react/prop-types */
import './btn.scss'

const Button = ({text}) => {
  return (
    <button className='btnComponent'> {text}  </button>
  )
}

export default Button