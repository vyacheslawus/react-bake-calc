

export const RenderCard = ({ product, changeColor, changeColorTitles }) => {
  return (
    <>
      {product?.map((item, index) => {
        if (item.addIng) {
          return <p key={index} style={changeColorTitles}>{item.addIng}</p>;
        } else if (item.doughTitle) {
          return <p key={index} style={changeColorTitles}>{item.doughTitle}</p>;
        }

        else {
          return (
            <li className="product-page-item" key={index}>
              <div className="product-page">
                {console.log(item.name)}

                {item.addIng && (
                  <p style={{ color: "red", fontWeight: "bold" }}>{item.addIng}</p>
                )}

                {item.name && <p>{item.name}</p>}

                <div style={{ display: "flex" }}>
                  {item.amount && (
                    <p style={changeColor}>{item.amount} </p>
                  )}
                  <span> гр.</span>
                </div>
              </div>
            </li>
          );
        }
      })}
    </>
  );
};

