import React, { useState } from "react"

const Form = (props) => {

    const [formData, setFormData] = useState(props.place)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    }

    const handleChange = (event) => {
        const target = event.target
        setFormData({...formData, [target.name]: target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Name:</h4>
            <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}   
            />
            <h4>Image URL</h4>
            <input 
                type="text" 
                name="img" 
                value={formData.img}
                onChange={handleChange}   
            />
            <h4>Description</h4>
            <input 
                type="text" 
                name="description" 
                value={formData.description}
                onChange={handleChange}   
            />
            <br/>
            <input type="submit" value={props.label} />
        </form>
    )
}

export default Form