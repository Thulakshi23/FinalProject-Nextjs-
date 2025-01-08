"use client";

import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [showAdditionalIngredients, setShowAdditionalIngredients] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setSelectedIngredients((prev) =>
      checked ? [...prev, value] : prev.filter((ingredient) => ingredient !== value)
    );
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
    // Reset checkboxes is handled by managing the state of selectedIngredients
  };

  return (
    <div
      id="home-page"
      style={{
        backgroundImage: "url('/pexels-adonyi-foto-1400172.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px", marginTop: "5cm", marginLeft: "8cm" }}>
        {/* Ingredients Section */}
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", flex: 0.5 }}>
          <h2>What's in Your Fridge?</h2>
          <button
            aria-label="Toggle additional ingredients"
            onClick={() => setShowAdditionalIngredients((prev) => !prev)}
            style={{ padding: "10px", margin: "10px 0", cursor: "pointer" }}
          >
            {showAdditionalIngredients ? "Hide Ingredients" : "Click Here for All Ingredients"}
          </button>
          <div>
            <h3>Vegetables</h3>
            <ul>
              {["Jackfruit", "Eggplant", "Pumpkin", "Drumstick", "Okra"].map((veg) => (
                <li key={veg}>
                  <label>
                    <input
                      type="checkbox"
                      value={veg}
                      checked={selectedIngredients.includes(veg)}
                      onChange={handleCheckboxChange}
                    />{" "}
                    {veg}
                  </label>
                </li>
              ))}
            </ul>
            {showAdditionalIngredients && (
              <>
                <h3>Non-Vegetarian Dishes</h3>
                <ul>
                  {["Chicken", "Fish", "Eggs"].map((nonVeg) => (
                    <li key={nonVeg}>
                      <label>
                        <input
                          type="checkbox"
                          value={nonVeg}
                          checked={selectedIngredients.includes(nonVeg)}
                          onChange={handleCheckboxChange}
                        />{" "}
                        {nonVeg}
                      </label>
                    </li>
                  ))}
                </ul>
                <h3>Other Ingredients</h3>
                <ul>
                  {["Curry Leaves", "Mustard Seeds", "Fenugreek Seeds"].map((other) => (
                    <li key={other}>
                      <label>
                        <input
                          type="checkbox"
                          value={other}
                          checked={selectedIngredients.includes(other)}
                          onChange={handleCheckboxChange}
                        />{" "}
                        {other}
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Selected Ingredients Section */}
        <aside
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            flex: 0.5,
          }}
        >
          <h2>Your Ingredients</h2>
          <ul>
            {selectedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              aria-label="Find Recipes"
              style={{
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Find Recipes
            </button>
            <button
              aria-label="Clear selected ingredients"
              onClick={clearIngredients}
              style={{
                padding: "10px 15px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
