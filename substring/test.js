import { isAllSymbUniq, longestSubsting } from './longestSubstring';

it('uniq', () => {
  expect(isAllSymbUniq('asdfss')).toBe(false);
  expect(isAllSymbUniq('poiuyqw')).toBe(true);
});

it('longest substring', () => {
  expect(longestSubsting('1234561qweqwerqer')).toBe('234561qwe');
  expect(longestSubsting('wervfdrrntca')).toBe('wervfd');
  expect(longestSubsting('12345')).toBe('12345');
});
