import React,{Component} from 'react';
import Userout from './component/Userout';



export default class App extends Component {
state={
  tasks: [
    {
      id: 1,
      name: "yasmin",
     
    },]

}

adduser = (newTask, del) => {
  newTask.id = this.state.tasks.length + 1;
  this.setState({
    tasks: [...this.state.tasks, newTask]
  })
  del();
}
  render (){
  return (
    <div >
     
          Learn React


        <Userout adduser={this.adduser}/>
<ul>

{this.state.tasks.map(task => 

<li> {task.name}</li>  )

}



</ul>
        
    </div>
  );
}}


