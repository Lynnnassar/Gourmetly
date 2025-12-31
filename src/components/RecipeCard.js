import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, showRemove = false, onRemove }) {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>{recipe.shortDesc}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Link to={`/recipes/${recipe.id}`}>
          <button>View Recipe</button>
        </Link>

        {/* Remove button appears only inside the weekly plan */}
        {showRemove && (
          <button 
            onClick={onRemove}
            style={{
              background: '#e63946',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
