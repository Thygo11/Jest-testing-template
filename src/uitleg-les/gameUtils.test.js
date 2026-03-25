import {getRank, addScores, hasWon , getHighScore} from './gameUtils';

test('geef noob terug met score 0', () => {
const result = getRank(0);
expect(result).toBe('Noob');
})
test('geef pro terug met score 100', () => {
const result = getRank(50);
expect(result).toBe('Pro');
});

test('test addScores met 20 en 30', () => {
const result = addScores(20, 30);
expect(result).toBe(50);
})