import React from 'react'
import toysObj from './database'
import ToyCard from './ToyCard'


class ToysContainer extends React.Component{
    // const toys = toysObj.toys.map(toy => < ToyCard id= {toy.id} name={toy.name} likes={toy.likes} image = {toy.image}/>)
   state = {
       toys: [],
       whatever: "Hello there",
       search: ""
   }
    makeToyCards(){
        // console.log(this.state.search)
        let displayToys = this.state.toys
        if(this.state.search){
            displayToys = displayToys.filter(toy => toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
    // const toys = toysObj.toys.map(toy => <ToyCard toy = {toy}/>)
    return displayToys.map(toy => <ToyCard toy = {toy}/>)
    // return toys
    }

    componentDidMount(){
        const url = "http://localhost:3000/toys"
        fetch(url)
        .then(r => r.json())
        .then(json => {
            this.setState({toys: json}, () => {console.log(this.state)})
        })
    }

    handleInputChange = (e) => {
        // console.log(e.target.value)
        let searchVar = e.target.value
        this.setState({search: searchVar})
    }

    render(){
    return(
        <div id="toy-container">
            <div>
                <input type="text" placeholder="Search for a toy..." onChange={this.handleInputChange}/>
            </div>
            {this.makeToyCards()}
        </div>
    )
    }
    
}

export default ToysContainer