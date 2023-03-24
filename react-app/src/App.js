import logo from './logo.svg';
import './App.css';

function App() {
  // lab 1
  const fullName = 'Suphaluck Somkaew';
  const birthYear = '1995';

  // lab 2
  const height = 1.54;
  const weight = 60;
  const calcBMI = (h, w) => w / h ** 2;

  // lab 6
  const string = 'this is string type';
  const number = 123456;
  const boolean = true;
  const thisIsNull = null;
  const thisIsUndefined = undefined;
  const obj = { name: 'john' };

  return (
    <div>
      <h1>Lab 1</h1>
      <h1>{fullName}</h1>
      <p>{birthYear}</p>
      <hr />
      <h1>Lab 2</h1>
      <h1>{calcBMI(height, weight).toFixed(2)}</h1>
      <hr />
      <h1>Lab 3</h1>
      <label htmlFor="username">Username </label>
      <input
        className="username"
        id="username"
        name="username"
      />
      <hr />
      <h1>Lab 4</h1>
      <h1>Welcome to Thailand</h1>
      <h2>Land of smile</h2>
      {/* ตามรูปรันไม่ได้เพราะไม่ได้อยู่ใน root element เดียวกัน แต่ใน App.js ไฟล์นี้รันได้เพราะจับเข้า root เดียวกับ lab ทุกข้อ */}
      <hr />
      <h1>Lab 5</h1>
      {/* <div>
      <span>My name is John.</span>
      <br>
      <span>I'm 27 years old.</span>
    </div> */}
      {/* รันไม่ได้เพราะ <br> ไม่มี tag ปิด */}
      <hr />
      <h1>Lab 6</h1>
      <p>{string}</p>
      <p>{number}</p>
      <p>{boolean.toString()}</p>
      <p>{String(thisIsNull)}</p>
      <p>{String(thisIsUndefined)}</p>
      <p>He's name is {obj.name}</p>
    </div>
  );
}

export default App;
