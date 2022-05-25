// setTimeout, setInverval

let num = 0;
function showTime(){
    console.log(`고객님 접속한지 ${num++}초가 지났습니다.`);
    if(num > 3){
        clearInterval(tId);
    }
}
const tId = setInterval(showTime,1000);

function showName(name){
    console.log(name);
}
setTimeout(showName, 2000, 'Mike'); // 2초후 실행
