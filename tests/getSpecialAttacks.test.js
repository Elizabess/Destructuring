const { getSpecialAttacks } = require('../src/getSpecialAttacks');

describe('getSpecialAttacks', () => {
  const character = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...' 
      }
    ]
  };

  test('should return array of special attacks with all fields', () => {
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
      }
    ];

    expect(getSpecialAttacks(character)).toEqual(expected);
  });

  test('обработка специального массива', () => {
    const emptyCharacter = { special: [] };
    expect(getSpecialAttacks(emptyCharacter)).toEqual([]);
  });

  test('отсутствие описания у атак', () => {
    const characterWithNoDescriptions = {
      special: [
        { id: 1, name: 'Attack One', icon: 'http://...' },
        { id: 2, name: 'Attack Two', icon: 'http://...' }
      ]
    };

    const expected = [
      { id: 1, name: 'Attack One', icon: 'http://...', description: 'Описание недоступно' },
      { id: 2, name: 'Attack Two', icon: 'http://...', description: 'Описание недоступно' }
    ];

    expect(getSpecialAttacks(characterWithNoDescriptions)).toEqual(expected);
  });
});
