// app.test.js

import $ from 'jquery';

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

jest.mock('jquery', () => ({
  ajax: jest.fn(),

}));

describe('Movie App', () => {

beforeEach(() => {
  jest.clearAllMocks();

});

test('searchMovie function makes AJAX call and display results', () => {
  const mockResponse = {
      Response: 'True',
      Search: [
        {Title: 'Test Movie 1', Year: '2021', imdbID: 'tt123'},
        {Title: 'Test Movie 2', Year: '2022', imdbID: 'tt456'},
      ],

  };
  $.ajax.mockImplementationOnce((url, {success}) => success(mockResponse));

  searchMovie('Test Movie');

  expect($.ajax).toHaveBeenCalledWith(
    expect.objectContaining({
      data: expect.objectContaining({
        s: 'Test Movie',
      }),
    })
  );

  setTimeout(() => {
    expect($('#movie-results').html()).toContain('Test Movie 1');
    expect($('#movie-results').html()).toContain('Test Movie 2')
  }, 0);
  });

  test('toggleFavorite function adds and removes from localStorage', () =>{
    const movie ={ imdbID: 'tt123', title: 'Test Movie'};
 
    localStorage.getItem.mockImplementationOnce('[]');

    toggleFavorite(movie.imdbID, movie.title);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([movie]));

    localStorage.getItem.mockImplementationOnce(JSON.stringify)([movie]));

    toggleFavorite(movie.imdbID, movie.title);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([]));
 
 
  });

  test('updateFavoriteCount updates the UI with the correct favorite count', () => {
    const favorites = [{ imdbID:'tt123', title: 'Test Movie'}];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([favorites]));
  
    updateFavoriteCount();
  
  }

  expect($(''))




