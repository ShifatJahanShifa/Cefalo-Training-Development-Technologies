export {}
// // numeric enum, auto-increment
// enum Direction {
//     Up=1,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction[Direction.Down]);

// // function show(point: number, dir: Direction): void
// // {
// //     console.log(point, dir)
// // }

// // show(3,Direction.Left) 

// // string enum
// enum DirectionString {
//     Up='up',
//     Down='down',
//     Left='left',
//     Right='right',
// }

// console.log(DirectionString);

// enum StatusCode {
//     ok=200,
//     success=ok
// }

// // console.log(StatusCode[200])

// function getValue() {
//     return 5;
//   }
  
//   enum Foo {
//     A = 123,
//     B = A, // will inline as 123
//     C = getValue(), // needs function call
//     // D = C, // C is not constant, so D = Foo.C
//     E=StatusCode.success
//   }
  
//   console.log(Foo[getValue()]);
//   console.log(StatusCode[200])
  

const enum Status {
    ok=200,
    success=ok
}
