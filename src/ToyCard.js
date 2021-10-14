function ToyCard(props){
    const {id, name, image, likes} = props.toy
    // console.log(props)
    return(
        <div className="card" id={`toy-${id}`}>
            <h2>{name}</h2>
            <img src={image} className="toy-avatar"/>
            <p>{likes} Likes </p>
            <button className="like-btn">Like &lt;3</button>
        </div>
    )
}
export default ToyCard

// {
//     "id": 1,
//     "name": "Woody",
//     "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//     "likes": 7
//   },