// app.test.js
import $ from 'jquery';
import { searchMovie, toggleFavorite, updateFavoriteCount } from '../assets/script';


jest.mock('jquery', () => ({
  ajax: jest.fn(),
  default: {
    fn: {
      click: jest.fn(),
      css: jest.fn(),
      html: jest.fn(),
      text: jest.fn(),
      ready: jest.fn((callback) => callback()),
    }
   
  }
}));

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

describe('Movie App', () => {
});
beforeEach(() => {
  jest.clearAllMocks();
  jest.useFakeTimers();

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
    expect($('#movie-results').html).toHaveBeenCalledWith();
    expect($('#movie-results').html()).toContain('Test Movie 1');
    expect($('#movie-results').html()).toContain('Test Movie 2')
  
  }, 0);

  jest.runAllTimers();
  });

  test('toggleFavorite function adds and removes from localStorage', () =>{
    const movie ={ imdbID: 'tt123', title: 'Test Movie'};
 
    localStorage.getItem.mockImplementationOnce(() => '[]')

    toggleFavorite(movie.imdbID, movie.title);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([movie]));

    localStorage.getItem.mockImplementationOnce(() => JSON.stringify([movie]));

    toggleFavorite(movie.imdbID, movie.title);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([]));
 
 
  });

  test('updateFavoriteCount updates the UI with the correct favorite count', () => {
    const favorites = [{ imdbID:'tt123', title: 'Test Movie'}];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(favorites));
  
    updateFavoriteCount();
  
  
    expect($('#favorites-count').text()).toHaveBeenCalledWith();
  expect($('#favorites-count').text()).toBe('1');

});
test('Back to recommendations button works', () => {


$('#back-to-recommendations-btn').click();

expect($('#recommended-section').css).toHaveBeenCalledWith('display');
expect($('#movie-results').css).toHaveBeenCalledWith('display');
expect($('#back-to-recommendations-btn').css).toHaveBeenCalledWith('display');


expect($('#recommended-section').css()).toBe('block');
expect($('#movie-results').css()).toBe('none');
expect($('#back-to-recommendations-btn').css()).toBe('none');

});
