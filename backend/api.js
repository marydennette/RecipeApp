

export async function fetchRecipes() {
  try {
    const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY');
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}
