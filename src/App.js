import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super();
   this.state=({
     list:['burger','zinger karai','pizza','biryani','karai','ice-cream','nihari','paee','tika','chapli'],
     numbers:[1,2,3,4,5,6,7,8,9,10],
      result: [],
      numberResult: []
    })

  }

search(e){
  // console.log("this***",this);
  // console.log("e",e.target.value);
  const { list } = this.state ;
  const text = e.target.value;
  const result = list.filter(item => {
    const LowerItem = item.toLowerCase();
    const LowerText= text.toLowerCase();

    return LowerItem.substring(0, LowerText.length).indexOf(LowerText) !== -1
  })
  this.setState({result,text})
   }


  numberSearch(e){
    const { numbers } = this.state ;
  const text = e.target.value;
  const numberResult = numbers.filter(item => {
  
    return item === +text
  })
  this.setState({
    numberResult,text
  })
  }






  render() {
    const { list,result,text,numbers,numberResult }=this.state;
    // const items = result.length ? result : list;
    const items = text ? result : list;
    const numberItems = text ? numberResult : numbers;
    return (
      <div className="App">
        <input type="text" placeholder="Search Food List" onChange={this.search.bind(this)} />
        <h1>Eid Party items</h1>
    {text && <h1>Searching Food "{text}"</h1>}
       <ol> 
         {items.map((item,index)=>{ 
        return <li key={`${item}_${index}`}>{item}</li>
      })}
      </ol>
       
       <ul>
       {numberItems.map((item,index)=>{ 
        return <li key={`${item}_${index}`}>{item}</li>
       })}
       </ul>
       {/* <ol> {list.map((item,index)=>
        <li key={index}>{item}</li>
        )}</ol> */}
      </div>
    );
  }
}

export default App;
