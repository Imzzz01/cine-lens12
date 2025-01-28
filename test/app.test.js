// app.test.js
const $ = require('jquery');

// mocking localStorage
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.removeItem = jest.fn();
});

// Mock jQuery and necessary methods like .ready(), .addClass(), .text(), etc.
jest.mock('jquery', () => {
  const originalJQuery = jest.requireActual('jquery');
  return {
    ...originalJQuery,
    ajax: jest.fn(),
    fn: {
      ...originalJQuery.fn,
      addClass: jest.fn(),
      removeClass: jest.fn(),
      text: jest.fn().mockReturnValue('Light Mode'),
    },
    ready: jest.fn((callback) => callback()), // Ensure the callback is called immediately
  };
});

// Ensure jQuery is available globally for script.js
beforeAll(() => {
  global.$ = $;
  global.jQuery = $;
});

test('dark mode toggle works', () => {
  localStorage.setItem('dark-mode', 'enabled');
  
  // Run the script
  require('../assets/script.js');
  
  // Check if jQuery methods were called correctly
  expect($('body').hasClass('dark-mode')).toBe(true); 
  expect($('#dark-mode-toggle').text()).toBe('Light Mode');
});

test('toggleFavorite adds/removes favorites correctly', () => {
  const imdbID = 'tt1234567';
  const title = 'Movie Title';
  
  localStorage.setItem('favorites', JSON.stringify([]));
  require('../assets/script.js');
  
  toggleFavorite(imdbID, title);
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  expect(favorites.length).toBe(1);
  expect(favorites[0].imdbID).toBe(imdbID);

  toggleFavorite(imdbID, title);
  favorites = JSON.parse(localStorage.getItem('favorites'));
  expect(favorites.length).toBe(0);
});

test('searchMovie makes API request', () => {
  const query = 'Harry Potter';
  $.ajax.mockImplementationOnce((options) => {
    options.success({ Response: 'True', Search: [] });
  });
  
  require('../assets/script.js');
  
  $('#movie-search').val(query);
  $('#search-btn').click();
  
  expect($.ajax).toHaveBeenCalledWith(expect.objectContaining({
    url: 'https://www.omdbapi.com/',
    data: expect.objectContaining({ s: query, apikey: '2fee485b' })
  }));
});