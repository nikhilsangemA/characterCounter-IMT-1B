import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {userInput: '', initialVal: false, tasksList: []}

  changeUserText = event => {
    this.setState({userInput: event.target.value})
  }

  clickAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    console.log(userInput)

    const newData = {
      id: uuidv4(),
      userVal: userInput,
    }

    if (userInput.length > 0) {
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newData],
        initialVal: true,
        userInput: '',
      }))
    }
  }

  taskRes = eachOf => {
    const {id, userVal} = eachOf
    return (
      <li key={id} className="li-list">
        <p>{`${userVal} : ${userVal.length}`}</p>
      </li>
    )
  }

  getHead = () => {
    const {tasksList} = this.state
    console.log(tasksList)
    return (
      <div>
        <ul>{tasksList.map(eachOf => this.taskRes(eachOf))}</ul>
      </div>
    )
  }

  render() {
    const {userInput, initialVal} = this.state

    return (
      <div className="mainContainer">
        <div className="firstCont">
          <h1>Count the characters like a Boss...</h1>
          {initialVal ? (
            this.getHead()
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-img"
            />
          )}
        </div>
        <div className="secondCont">
          <h1>Character Counter</h1>
          <form onSubmit={this.clickAdd}>
            <input
              type="text"
              placeholder="Enter the characters here"
              value={userInput}
              onChange={this.changeUserText}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
