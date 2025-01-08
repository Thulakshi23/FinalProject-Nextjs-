import React, { useState } from 'react';
import Link from 'next/link'; // Importing Next.js Link

const MealPlanner: React.FC = () => {
  const mealImages: string[] = [
    '/pexels-catscoming-674574.jpg',
    '/pexels-cottonbro-3338497.jpg',
    '/pexels-alesiakozik-6544243.jpg',
    '/pexels-cottonbro-3338497.jpg',
    '/pexels-alesiakozik-6544243.jpg',
  ]; // Directly referencing the images by path in the public folder

  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);

  const handleSave = () => {
    console.log('Saved meals:', selectedMeals);
  };

  const handleCancel = () => {
    setSelectedMeals([]);
  };

  const handleMealClick = (index: number) => {
    setSelectedMeals((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((mealIndex) => mealIndex !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div
      id="meal-planner-page"
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundImage: `url('/pexels-karolina-grabowska-6660066.jpg')`, // Adjusted the background path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Meal Planner</h1>
      <div className="main-section" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        {/* Left Panel */}
        <div className="left-panel" style={{ width: '35%' }}>
          <p
            className="weekday-label"
            style={{
              fontSize: '2.2rem',
              backgroundColor: 'white',
              marginBottom: '10px',
              marginLeft: '3cm',
              marginRight: '8cm',
              color: 'black',
            }}
          >
            Monday - Friday
          </p>
          <div
            className="grid-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            {mealImages.map((image, index) => (
              <Link key={index} href={`/meal-details/${index}`} passHref>
                <div
                  className="grid-item"
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onClick={() => handleMealClick(index)}
                >
                  <img
                    src={image}
                    alt={`Meal ${index + 1}`}
                    className={`meal-image ${selectedMeals.includes(index) ? 'selected' : ''}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease',
                      transform: selectedMeals.includes(index) ? 'scale(1.05)' : 'none',
                      border: selectedMeals.includes(index) ? '3px solid #ff6347' : 'none',
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Right Panel */}
        <div
          className="right-panel"
          style={{
            width: '30%',
            height: '10%',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '5cm',
            marginRight: '7cm',
          }}
        >
          <div className="preview-box" style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>Selected Meals</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {selectedMeals.length > 0 ? (
                selectedMeals.map((mealIndex) => (
                  <li
                    key={mealIndex}
                    style={{
                      backgroundColor: '#f7f7f7',
                      padding: '10px',
                      marginBottom: '8px',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Meal {mealIndex + 1}
                  </li>
                ))
              ) : (
                <p>No meals selected</p>
              )}
            </ul>
          </div>
          <div className="button-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              className="btn cancel-btn"
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#f44336',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="btn save-btn"
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#4caf50',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
