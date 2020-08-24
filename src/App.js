import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      list: ['kabab','karai','biryani','pizzz','tika'],
      result: []
    }
    this.search=this.search.bind(this);
  }

  search(e){
console.log("****this",e.target.value);
var text=e.target.value;
var {list}=this.state;  

const result=list.filter(item=>{
  const lowerItem= item.toLocaleLowerCase();
  const lowerText= text.toLocaleLowerCase();
  return lowerItem.substring(0,lowerText.length).indexOf(lowerText) !== -1
})
this.setState({
result,text
})
}
  render() {
    const {list,result,text}=this.state;
    // const items = result.length ? result :list
    const items = text ? result :list
    return (
      <div>
          <input type="text" placeholder="Search list" onChange={this.search}/>
        <ul>
          
          {items.map((el,index)=>
            <li key={index}>{el}</li>
            )}
          </ul>

      </div>
    );
  }
}

export default App;
