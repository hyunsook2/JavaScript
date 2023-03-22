const quotes=[
    {
        quote:"정보) 영어 읽는 척 하면 회사에서 안 짤릴 확률 1% 상승한다",
        author:"조민형",
    },
    {
        quote:"형님 오늘배운거 그냥 다 외우세요",
        author:"공승환",
    },
    {
        quote:"어서오세요:)",
        author:"카페희다",
    }
];
//주어진 배열을 랜덤으로 선정해서
//화면에 quote div의 span안에 각각 출력
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
document.querySelector('#quotes span:first-child').innerHTML=todayQuote.quote;
document.querySelector('#quotes span:last-child').innerHTML=todayQuote.author;