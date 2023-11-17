const Card = ({item}) => {

    const titleFormatted = item.title.slice(0,20)
    const precentageDrop = ((item.price_strikethrough - item.price) / 
                            item.price_strikethrough * 100).toFixed(0)
                            
    return (
        <div className="card">
            <div className="img-container">
                <img src={item.url_image} alt={item.title} />
            </div>
            <div className="text-container">
                <h5>{titleFormatted}...</h5>
                <p>Price drop from {item.price_strikethrough} to {item.price}</p>
                <p>Rating: {item.rating}</p>
            </div>
            <div className="info-container">
                <div className="circle">{precentageDrop}%</div>
                <a href={`https://www.amazon.com/${item.url}`}>GO!</a>
            </div>
        </div>
    )
} 

export default Card