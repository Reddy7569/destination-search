// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails

  return (
    <li className="destination_item">
      <img src={imgUrl} alt={name} className="destination_image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
