import { data } from "../data/data";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = {};

  // Count the number of discoveries per year
  data.asteroids.forEach(asteroid => {
    const year = asteroid.discoveryYear;
    if (!yearCounts[year]) {
      yearCounts[year] = 0;
    }
    yearCounts[year]++;
  });

  // Find the year with the maximum count
  let maxYear = null;
  let maxCount = 0;

  for (const year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxCount = yearCounts[year];
      maxYear = year;
    }
  }

  return parseInt(maxYear, 10);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
