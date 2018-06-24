import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
        <div>测试react里面的热更新-成功</div>
      </div>
    );
  }
}

export default Greeter
