import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

test('gets full year', () => {
    expect(getFullYear()).toBe(2022);
});

test('footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('HOlberton School main dashboard');
});

test('latest notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});