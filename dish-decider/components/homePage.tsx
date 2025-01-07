import React, { useState } from 'react';
import backgroundImage from '../public/pexels-adonyi-foto-1400172.jpg'; // Import the background image

const HomePage: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]); // Specify type as string array
  const [showAdditionalIngredients, setShowAdditionalIngredients] = useState<boolean>(false); // Specify type as boolean

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Specify event type
    const { value, checked } = event.target;

    if (checked) {
      // Add ingredient to the list
      setSelectedIngredients((prev) => [...prev, value]);
    } else {
      // Remove ingredient from the list
      setSelectedIngredients((prev) => prev.filter((ingredient) => ingredient !== value));
    }
  };

  // Clear the selected ingredients
  const clearIngredients = () => {
    setSelectedIngredients([]);
    document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((checkbox) => (checkbox.checked = false));
  };

  // Toggle additional ingredients
  const toggleAdditionalIngredients = () => {
    setShowAdditionalIngredients((prev) => !prev);
  };

  // Inline styles
  const styles = {
    homePage: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
    },
    container: {
      display: 'flex',
      gap: '20px',
      maxWidth: '1200px',
      width: '100%',
      marginTop: '5cm',
      marginLeft: '8cm',
    },
    box: {
      backgroundColor: '#ffffff',
      marginRight: '4cm',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      flex: '0.5',
    },
    yourIngredients: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      flex: '0.5',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    findRecipesBtn: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    clearBtn: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <div id="home-page" style={styles.homePage}>
      <div style={styles.container}>
        {/* Ingredients Selection Section */}
        <div style={styles.box}>
          <h2>What's in Your Fridge?</h2>
          <button
            id="toggle-button"
            className="dropdown-btn"
            onClick={toggleAdditionalIngredients}
          >
            {showAdditionalIngredients ? 'Hide Ingredients' : 'Click Here for All Ingredients'}
          </button>
          <div className="ingredient-list">
            <div id="vegetables-section">
              <h3>Vegetables</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="Jackfruit"
                    onChange={handleCheckboxChange}
                  />{' '}
                  Jackfruit
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Eggplant"
                    onChange={handleCheckboxChange}
                  />{' '}
                  Eggplant
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Pumpkin"
                    onChange={handleCheckboxChange}
                  />{' '}
                  Pumpkin
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Drumstick"
                    onChange={handleCheckboxChange}
                  />{' '}
                  Drumstick
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Okra"
                    onChange={handleCheckboxChange}
                  />{' '}
                  Okra
                </li>
              </ul>
            </div>
            {/* Additional Ingredients Section */}
            {showAdditionalIngredients && (
              <div id="additional-sections">
                <h3>Non-Vegetarian Dishes</h3>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value="Chicken"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Chicken
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Fish"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Fish
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Eggs"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Eggs
                  </li>
                </ul>
                <h3>Other Ingredients</h3>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value="Curry Leaves"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Curry Leaves
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Mustard Seeds"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Mustard Seeds
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Fenugreek Seeds"
                      onChange={handleCheckboxChange}
                    />{' '}
                    Fenugreek Seeds
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Selected Ingredients Section */}
        <aside style={styles.yourIngredients}>
          <h2>Your Ingredients</h2>
          <div className="ingredients-list">
            <ul id="selected-ingredients">
              {selectedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button id="find-recipes-btn" style={{ ...styles.button, ...styles.findRecipesBtn }}>
              Find Recipes
            </button>
            <button id="clear-btn" onClick={clearIngredients} style={{ ...styles.button, ...styles.clearBtn }}>
              Clear
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
