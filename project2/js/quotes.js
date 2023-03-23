const quote=[
    {
        quote:"정보) 영어 읽는 척 하면 회사에서 안 짤릴 확률 1% 상승한다",
        author:"조민형",
    },
    {
        quote:"글씀다. 흙..",
        author:"공승환",
    }
];
//주어진 배열을 랜덤으로 선정해서
//화면에 quote div의 span안에 각각 출력
const todayQuote=quote[Math.floor(Math.random()*quote.length)];
$('#quote span').first().html(`<blockquote>${todayQuote.quote}</blockquote>`);
$('#quote span').last().html(todayQuote.author);