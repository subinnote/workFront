window.onload = function(){
    let register = document.querySelector('#register');

    // 버튼이 클릭되면
    // json형식 문자열을 파싱해서 화면에 출력
    register.addEventListener('click', (e)=>{

        console.log(jsObj);

        let tbody = document.querySelector('#attendant > tbody');
        
        // 기본이벤트(submit) 제거
        e.preventDefault();
        // 화면에 출력
        
        // 반복문을 이용하여 배열에 들어있는 데이터를 출력
        for(obj of jsObj){
            // 테이블의 행을 생성
            let newTr = document.createElement('tr');
            // 테이블의 한칸을 생성
            let newTdName = document.createElement('td');
            newTdName.innerHTML = obj.name;
            let newTdMajor = document.createElement('td');
            newTdMajor.innerHTML = obj.major;
            let newTdGrade = document.createElement('td');
            newTdGrade.innerHTML = obj.grade;

            // 행에 자식요소로 칸을 추가
            newTr.appendChild(newTdName);
            newTr.appendChild(newTdMajor);
            newTr.appendChild(newTdGrade);

            // 테이블에 자식요소로 행을 추가
            tbody.appendChild(newTr);
        }
    });
}



// 함수 밖에서 선언했으므로 = 전역변수로 사용될수 있다

// json 형식의 문자열
// json 형식의 문자열 + 배열
// []안에 json형식의 문자열을 ,를 이용하여 연결
let jsonStr = `
    [
        {
            "name" : "도레미"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
          }
        ,  {
            "name" : "솔라시"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
          }
        ,  {
            "name" : "레미파"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
          }
        ,  {
            "name" : "미파솔"
            , "major" : "컴퓨터 공학"
            , "grade" : 2
          }
    ]    
`;

// jsObj로 변경
let jsObj = JSON.parse(jsonStr);


