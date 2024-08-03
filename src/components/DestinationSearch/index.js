// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchresults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app_container">
        <div className="destination_search_container">
          <h1>Destination Search</h1>
          <input
            type="search"
            onClick={this.onChangeSearch}
            value={searchInput}
            placeholder="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
          <div>
            <ul>
              {searchresults.map(each => (
                <DestinationItem key={each.id} destinationsDetails={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
