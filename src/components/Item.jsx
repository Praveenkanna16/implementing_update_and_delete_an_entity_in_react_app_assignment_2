import React from 'react';

const Item = ({ item }) => {

    // Render a single item
    // Add a Delete and Edit button
    return (
        <div>
            <p>{item}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default Item;
