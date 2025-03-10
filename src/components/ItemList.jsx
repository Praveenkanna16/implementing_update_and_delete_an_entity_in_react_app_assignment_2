import Item from "./Item";

const ItemList = ({ items }) => {
    const filteredItems = items.filter(item => item.price > 10); // Filter items based on a condition

    return (
        <>
            {filteredItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
};

export default ItemList;
