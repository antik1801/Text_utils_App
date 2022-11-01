import React, { useState } from "react";

const Description = () => {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [pastaContaint, setpastaContaint] = useState(
    "We make the best pasta in the town of love. But we can't beat your mom's made pasta definately he knows better how to cook food. We pray for you and your mom's long life. And always remember The world is great so be a greate and nice person always"
  );
  const [btnText, setbtnTxt] = useState("Enable Dark Mode");
  const [priceBtnText, setpriceButtonText] = useState("Price");

  const [coffeContaint, setcoffeContaint] = useState(
    "We don't make just a sip of coffe we make love. Our mom also tought us how to make it. and I am so lucky that still she is with me. If your mom is alive please give time to her because your parents won't live forever , once you loose them you will know the value of it."
  );
  const [pizzaContaint, setpizzaContaint] = useState(
    "French Thai Spanish Italien Belium Pizza's are available in our store. Pizza is one the the fancy items used by the customer from a long time, but by the time being it has changed the demand and now pizza is o longer the the riche's food. Now a days everyone can get the pizza for their daile needs."
  );
  const changeMode = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnTxt("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnTxt("Disable Dark mode");
    }
  };
  const pastaPrice = () => {
    if (priceBtnText === "Price") {
      setpastaContaint("Regular- 120/");
      setcoffeContaint("Regular 240/-");
      setpizzaContaint("Regular 580/");
      setpriceButtonText("Info");
    } else {
      setpastaContaint(
        "We make the best pasta in the town of love. But we can't beat your mom's made pasta definately he knows better how to cook food. We pray for you and your mom's long life. And always remember The world is great so be a greate and nice person always"
      );
      setcoffeContaint(
        "We don't make just a sip of coffe we make love. Our mom also tought us how to make it. and I am so lucky that still she is with me. If your mom is alive please give time to her because your parents won't live forever , once you loose them you will know the value of it."
      );
      setpizzaContaint(
        "French Thai Spanish Italien Belium Pizza's are available in our store. Pizza is one the the fancy items used by the customer from a long time, but by the time being it has changed the demand and now pizza is o longer the the riche's food. Now a days everyone can get the pizza for their daile needs."
      );
      setpriceButtonText("Price");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="mx-3 my-3">Item information</h1>
        <div
          className="accordion accordion-flush my-3"
          id="accordionFlushExample"
        >
          <div className="accordion-item my-2">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Pasta
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              style={myStyle}
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{pastaContaint}</div>
              <img src="pasta.jpg" alt="" />
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Coffe
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                {coffeContaint}
              </div>
              <img src="coffe.jpeg" alt="" />
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Pizza
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                {pizzaContaint}
              </div>
              <img src="pizza.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          onClick={changeMode}
          className="btn btn-dark mx-1"
        >
          {btnText}
        </button>
        <button type="button" onClick={pastaPrice} className="btn btn-dark">
          {priceBtnText}
        </button>
      </div>
    </>
  );
};

export default Description;
