const PROJECT_NAME = 'kiharito';

const bookTitle = document.getElementById('productTitle').textContent.trim();
const pageTitle = `『${bookTitle}』`;
const imageSrc = document.getElementById('imgTagWrapperId').querySelector('img').getAttribute('src');
const pageBodyArray = [`[${imageSrc}]`, '著者'];
document.getElementById('bylineInfo').querySelectorAll('.author').forEach(function (elem) {
    if (elem.textContent.includes('(著)')) {
        pageBodyArray.push(`\\t[${elem.querySelector('a').textContent.trim()}]`)
    }
});
// Amazonのページ内で#detailBulletsWrapper_feature_divが重複してしまっている
const bookInfo = document.getElementById('detailBulletsWrapper_feature_div').querySelector('#detailBullets_feature_div');
Array.from(bookInfo.children).forEach(function (elem) {
    if (elem.textContent.includes('発売日')) {
        const matchArray = elem.textContent.trim().match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
        const date = `${matchArray[1]}-${('00' + matchArray[2]).slice(-2)}-${('00' + matchArray[3]).slice(-2)}`;
        pageBodyArray.push('発売日', `\\t${date}`);
    }
});
pageBodyArray.push('読了日', "\\t", '', 'メモ', '\\t', '', '#読書記録');
const pageBody = pageBodyArray.join("\\n");
window.open(`https://scrapbox.io/${PROJECT_NAME}/${encodeURIComponent(pageTitle)}?body=${encodeURIComponent(pageBody)}`);
