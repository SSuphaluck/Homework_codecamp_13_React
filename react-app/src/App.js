import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Lab 1</h1>
      <h1>Hello My Friend</h1>
      <p>Friend List</p>
      <ul>
        <li>John</li>
        <li>Jack</li>
        <li>Jane</li>
      </ul>
      <hr />
      <h1>Lab 2</h1>
      <div>
        <span>Province : </span>
        <select>
          <option>Select</option>
          <option>Chiang Mai</option>
          <option>Chiang Rai</option>
          <option>Mae Hong Son</option>
          <option>Nan</option>
          <option>Phrae</option>
        </select>
      </div>
      <div>
        <span>District : </span>
        <select>
          <option>Select</option>
          <option>Mueang</option>
          <option>Chai Prakan</option>
          <option>Chiang Dao</option>
          <option>Chom Thong</option>
          <option>Doi Lo</option>
          <option>Doi Saket</option>
          <option>Doi Tao</option>
          <option>Fang</option>
          <option>Galyani Vadhana</option>
          <option>Hang Dong</option>
          <option>Hot</option>
          <option>Mae Ai</option>
          <option>Mae Chaem</option>
          <option>Mae On</option>
          <option>Mae Rim</option>
          <option>Mae Teang</option>
          <option>Omkoi</option>
          <option>Phrao</option>
          <option>Samoeng</option>
          <option>San Kamphaeng</option>
          <option>San Pa Tong</option>
          <option>San Sai</option>
          <option>Saraphi</option>
          <option>Wiang Haeng</option>
        </select>
      </div>
      <hr />
      <h1>Lab 3</h1>
      <button> + </button>
      <span> 0 </span>
      <button> - </button> <button> reset </button>
      <hr />
      <h1>Lab 4</h1>
      <div>
        <button>Add</button>
      </div>
      <div>
        <span>
          <del>Task 1</del> <button>Edit</button> <button>Del</button>
        </span>
      </div>
      <div>
        <span>
          Task 2 <button>Edit</button> <button>Del</button>
        </span>
      </div>
    </div>
  );
}

export default App;
