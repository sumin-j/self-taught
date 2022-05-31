// 1. box 2개 만들기
// 2. dropdown list 만들기
// 3. 환율정보
// 4. dropdown list에서 item 선택하면 item 바뀜
// 5. 금액을 입력하면 환전이 된다.
// 6. dropdown list에서 item 선택하면 그 단위 기준으로 환전이 됨
// 7. 숫자를 한국어로 읽는 법
// 8. 반대로 아래 박스에서 숫자를 바꿔도 위의 박스에 환율이 적용된다.

let currencyRatio = {
    USD : {
       KRW : 1235.22,
       USD : 1,
       VND : 23180.00,
       unit : "달러"
    },
    KRW : {
        KRW : 1,
        USD : 0.00081,
        VND : 18.77,
        unit : "원"
    },
    VND : {
        KRW : 0.053,
        USD : 0.000043,
        VND : 1,
        unit : "동"
    }
}

let fromCurrency = 'USD';
let toCurrency = 'USD';

document.querySelectorAll('#from-currency-list a').forEach((menu)=>
    menu.addEventListener('click',function(){
        document.getElementById('from-button').textContent = this.textContent;

        fromCurrency = this.textContent;
        convert();
    })
)

document.querySelectorAll('#to-currency-list a').forEach((menu)=>
    menu.addEventListener('click',function(){
        document.getElementById('to-button').textContent = this.textContent;

        toCurrency = this.textContent;
        convert();
    })
)

// 1. 키를 입력하는 순간 
// 2. 환전이 되서 
// 3. 환전된 값이 보인다.

function convert(){
    let amount = document.getElementById('from-input').value;
    let convertedAmout = amount * currencyRatio[fromCurrency][toCurrency]
    console.log(convertedAmout);

    document.getElementById('to-input').value = convertedAmout;
}

