import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {values, selectedTabId, changeTabId} = this.props
    const {tabId, displayText} = values
    const tabClass = selectedTabId === tabId ? 'active-tab' : 'inactive-tab'
    const changeTab = () => {
      changeTabId(tabId)
    }
    return (
      <li className={tabClass} id={tabId} onClick={changeTab}>
        <button type="button" className={`btn ${tabClass}`}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
