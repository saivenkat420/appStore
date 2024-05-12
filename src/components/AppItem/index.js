import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {values} = this.props
    const {appId, appName, imageUrl} = values
    return (
      <li id={appId} className="list-item">
        <img alt={appName} src={imageUrl} className="app-img" />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default TabItem
