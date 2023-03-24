import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div>
      <h1>Lab 1</h1>
      <Profile />
      <hr />
      <h1>Lab 2</h1>
      {/* function Car(props) {
            console.log(props.brand); // * Honda เพราะ props.brand ถูกส่งเข้าไปในค่า props ของ Car component และถูกเรียกใช้ในการ console log
            console.log(props.price); // ** 1000000 เพราะ props.price ถูกส่งเข้าไปในค่า props ของ Car component และถูกเรียกใช้ในการ console log
            console.log(props.color); // *** undefined เพราะ props.color ไม่ถูกส่งเข้ามาในค่า props ของ Car component props.color จึงไม่มีค่าให้เรียกใช้
            return <div>Car</div>;
          }
          ReactDOM.render(<Car brand="Honda" price="1000000" />, document.getElementById('root')); */}
      <hr />
      <h1>Lab 3</h1>
      <ProductItem
        name="Coke"
        price="40"
        description="product description"
      />
      <ProductItem
        name="Pepsi"
        price="39"
        description="product description1"
      />
      <hr />
      <h1>Lab 4</h1>
      <ProductItem
        obj={{
          name: 'Mirinda',
          price: '38',
          description: 'product description2'
        }}
      />
    </div>
  );
}

export default App;
