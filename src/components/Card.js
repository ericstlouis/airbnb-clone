
const Card = ({item}) => {
  return (
      <div>
          {
              item.map((value) => {
                  console.log(value)
              return (
                  <p key={value.id}>
                      {value.country}
                  </p>
              )
          })
      }
      </div>
  )
}

export default Card