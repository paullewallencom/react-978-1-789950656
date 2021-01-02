import React, {Component} from 'react'
import ReactDom from 'react-dom'

class List extends Component {
    
    render() {
        const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog']
        
        return (  <ol>
            {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>)

         
    }
}

export default List
