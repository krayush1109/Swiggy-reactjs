
// Function to extract rating value from a category string 
export const useExtractRating = (category) => {
    const match = category.match(/Ratings (\d+(\.\d+)?)/);
    return match ? match[1] : null;
};