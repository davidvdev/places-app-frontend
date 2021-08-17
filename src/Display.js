import React from "react";

const Display = (props) => {
    const {places} = props

    const loading = () => <h1>Loading...</h1>

    const loaded = () => {
        return(
            <div style={{textAlign:"center"}}>
                {places.map((place) => (
                    <article key={place._id}>
                        <h2>{place.name}</h2>
                        <img src={place.img} alt={place.name} />
                        <p>{place.description}</p>
                        <button onClick={() => {
                            props.selectPlace(place)
                            props.history.push("/edit")
                        }}>Edit</button>
                        <button onClick={() => {
                            props.deletePlace(place)
                        }}
                        >Delete</button>
                    </article>
                ))}  
            </div>
        )
    }
    return places.length > 0 ? loaded() : loading();
}

export default Display