import React from 'react';
import '../style/home.scss'
import { Button } from 'antd'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>makde
        <ul>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
        </ul>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
export default Home