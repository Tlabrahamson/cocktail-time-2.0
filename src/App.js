import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      drink: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            drink: res.drinks[0]
          });
        },

        error => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  handleClick() {
    console.log("Clicked");
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            drink: res.drinks[0]
          });
        },

        error => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  render() {
    const { error, drink } = this.state;
    console.log(drink.strDrink);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="app">
          <h1>Cocktail Time 2.0</h1>
          <div className="recipieWrap">
            <h2 className="subTitle">What'll it be?</h2>
            <div className="buttonWrap" onClick={this.handleClick}>
              Shake shake!
            </div>

            <h2>{drink.strDrink}</h2>
            <p className="drinkType">
              A {drink.strCategory} best served in a {drink.strGlass}
            </p>
            <img
              className="cocktailImg"
              src={drink.strDrinkThumb}
              alt="cocktail"
            />
            <h3>Ingredients: </h3>
            <ul className="ingredients">
              <li>
                {drink.strIngredient1} {drink.strMeasure1}
              </li>
              <li>
                {drink.strIngredient2} {drink.strMeasure2}
              </li>
              <li>
                {drink.strIngredient3} {drink.strMeasure3}
              </li>
              <li>
                {drink.strIngredient4} {drink.strMeasure4}
              </li>
              <li>
                {drink.strIngredient5} {drink.strMeasure5}
              </li>
              <li>
                {drink.strIngredient6} {drink.strMeasure6}
              </li>
              <li>
                {drink.strIngredient7} {drink.strMeasure7}
              </li>
              <li>
                {drink.strIngredient8} {drink.strMeasure8}
              </li>
              <li>
                {drink.strIngredient9} {drink.strMeasure9}
              </li>
              <li>
                {drink.strIngredient10} {drink.strMeasure10}
              </li>
              <li>
                {drink.strIngredient11} {drink.strMeasure11}
              </li>
              <li>
                {drink.strIngredient12} {drink.strMeasure12}
              </li>
              <li>
                {drink.strIngredient13} {drink.strMeasure13}
              </li>
              <li>
                {drink.strIngredient14} {drink.strMeasure14}
              </li>
              <li>
                {drink.strIngredient15} {drink.strMeasure15}
              </li>
            </ul>
            <h3>Instructions: </h3>
            <p className="instructions">{drink.strInstructions}</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
