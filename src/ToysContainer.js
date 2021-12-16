import React from 'react'
// import toysObj from './database'
import ToyCard from './ToyCard'


class ToysContainer extends React.Component{
    // const toys = toysObj.toys.map(toy => < ToyCard id={toy.id} name={toy.name} likes={toy.likes} image= {toy.image}/>)
   state = { // *see notes
       toys: [], // empty array wont break the application if you call something you would on an array i.e map, sort etc - nill would break
       whatever: "Hello there",  // showing that having this there does not do anything since we specifically call toys in fetch not whatever
       search: ""
   }
    makeToyCards(){
        // console.log(this.state.search)
        let displayToys = this.state.toys
        if(this.state.search){
            displayToys = displayToys.filter(toy => toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        } // taking display toys and go over this.state.toys(displayToys)..(all the toys) and filter through them by toy and check out each toys name and see if any of those toy names include what is being typed in the search bar -- toLowerCase makes it case insensitive
    // const toys = toysObj.toys.map(toy => <ToyCard toy = {toy}/>) ** after destucturing in toycard
    return displayToys.map(toy => <ToyCard toy = {toy}/>)
    // return toys
    }

    componentDidMount(){
        const url = "http://localhost:3000/toys"
        fetch(url)
        .then(r => r.json())
        .then(json => {
            this.setState({toys: json}, () => {console.log(this.state)}) //, this.setState({toys: json} () => {console.log(this.state)}) -- to see what this.state is 
        })
    }

    handleInputChange = (e) => {
        // console.log(e.target.value) -- shows whats happening as you type in the search
        let searchVar = e.target.value
        this.setState({search: searchVar})
        // this.setState({search: e.target.value}) ** in newest versions of react you dont need to set the variable first 
    }

    render(){
        return(
            <div id="toy-container">
                <div >
                    <input type="text" placeholder="Search for a toy..." onChange={this.handleInputChange}/>
                </div>
                {this.makeToyCards()}
            </div>
        )
    }
}

export default ToysContainer