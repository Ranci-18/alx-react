const getFullYear = () => new Date().getFullYear();

function getFooterCopy(isIndex) {
    if (isIndex) return 'Holberton School';
    return 'Holberton School main dashboard';
}

export { getFullYear, getFooterCopy };
