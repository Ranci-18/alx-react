import { getLatestNotification, getFooterCopy, getFullYear } from "./utils";

test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });

test('getFooterCopy returns correct string when passed true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    });
test('getFooterCopy returns correct string when passed false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
test('getFullYear returns correct number', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
    });