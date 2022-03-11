import star from "../images/StarSmall.png";


const Card = ({item}) => {
  return (
    <div className="flex flex-row ml-16 mt-4">
      {item.map((cardInfo) => {
        console.log(cardInfo);
        return (
          <div
            key={cardInfo.id}
            className="SinglecardDiv mx-5 mb-20 relative font-poppins "
          >
            <div className="cardimgDiv">
              <img
                className="w-80 h-80 rounded-xl shadow-md"
                src={cardInfo.image}
                alt={cardInfo.alt}
              />
              {cardInfo.status === 0 ? (
                <div className="absolute ml-2 top-3 px-3 shadow-md py- bg-white rounded-lg">
                  <span> Sold Out </span>
                </div>
              ) : (
                <div className="absolute ml-2 top-3 px-3 shadow-md py- bg-white rounded-lg">
                  {cardInfo.status}
                </div>
              )}
            </div>
            <div className="CardBodyDiv">
              <div className="flex items-center ">
                <img src={star} alt="a pink star" className="w-4 h-4" />(
                {cardInfo.rating})
                <div className="ml-1 font-thin text-zinc-500">
                  {cardInfo.reviews}
                  {'\u00B7'}
                  {cardInfo.country}
                </div>
              </div>
              <p className="font-light my-1">{cardInfo.bio}</p>
              <p>
                <span className="font-semibold">From {cardInfo.price}</span>
                /person
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card