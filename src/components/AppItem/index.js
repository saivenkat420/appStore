import {Component} from 'react'
import './index.css'

class AppItem extends Component {
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

export default AppItem
