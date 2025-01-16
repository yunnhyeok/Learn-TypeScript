// let 이름 :string = 'kim'; //무조건 문자만 들어올 수 있음
// 이름 = '123 '  하면 안됨

//let 이름 :string[] = ['kim' , 'park']; //array 자료지만 그 안에는 무조건 string 타입이 들어가야한다. 라는 뜻

//let 이름 :{ name? : string } = { name : 'kim '} // 오브젝트 작성은 :후에 오브젝트를 똑같이 만들어주고 오브젝트
// name에는 string 타입만 들어올 수 있습니다.  그럼 이름이라는 변수에는 무조건 string타입의 오브젝트만 기입 가능

// 다양한 타입이 들어올 수 있게 하려면 Union type
//let 이름: string | number = "kim"; //이름이라는 변수에는 string 혹은? number가 들어갈 수 있다!

//타입 지정하는게 너무 길다? 하면 타입은 변수에 담아쓸 수 있음 Type alias

//type Name = string | number; // string | number 타입을 'Name'이라는 글자로 저장 (여기서 타입명은 '대문자'로 많이 작명한다.)

//let 이름: Name = 123;

//함수를 만들때도 타입지정이 가능하다
// function 함수(x :number) :number{ // x 함수는 파라미터로 number, return 값으로 number 함수에 타입 지정 가능
//   //함수에 파라미터가있다.
//   return x * 2 //함수에 return값이 있다.
// }

//array자리에 이 자리에는 무조건 숫자가 들어가야된다 할때 쓰는 tuple 타입

//type Member = [number, boolean]; //john이라는 변수는 무조건 [number, boolean] 타입이 들어가야됨 < tuple 타입 > 입니다.
//Member의 첫번째 자리는 number 두번째 자리는 boolean(true,false)가 들어와야한다.
//let john:Member = [123 , true]

//object에 타입지정해야할 속성이 너무 많으면? age, name 등등 100개 정도 넣어야 되는 상황이 오면?

// type Member = {
//   [key :string] : string; //[key :string] 모든 object 속성
// };
// let john: Member = { name: "kim", age: '123' };

//class 타입지정 가능 전체적인 문법은 JS랑 같지만 타입 지정이 다르다
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

//ts로 HTML을 조작하기 성공

let 버튼 = document.querySelector("#button"); //Selector로 title찾기

버튼?.addEventListener("click", function () {});
