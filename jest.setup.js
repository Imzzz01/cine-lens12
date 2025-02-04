global.$ = require('jquery');

$.fn.ready = jest.fn((callback) => callback());

global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
};

jest.useFakeTimers();