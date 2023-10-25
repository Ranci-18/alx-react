import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('should return the exact year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('should return the footer string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('should return the latest notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
