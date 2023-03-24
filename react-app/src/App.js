import './index.css';
import TodoList from './TodoList';

function App() {
  // Lab 1
  const friends = [
    'firend1',
    'firend2',
    'firend3',
    'firend4',
    'firend5',
    'firend6'
  ];

  // Lab 2, 3
  let posts = [
    {
      id: 1,
      message: 'Happy new year',
      date: '1/1/2021',
      time: '00.01AM',
      author: 'John'
    },
    {
      id: 2,
      message: 'Programing is fun',
      date: '30/6/2021',
      time: '10.23AM',
      author: 'Jack'
    },
    {
      id: 3,
      message: 'Oh Amazing !!!',
      date: '23/7/2021',
      time: '08.17PM',
      author: 'Sarah'
    }
  ];

  // Lab 4

  return (
    <div>
      {/* <h1>---------Lab 1---------</h1>
      <ul>
        {friends.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <h1>---------Lab 2, 3---------</h1>
      {posts.map(({ id, message, date, author, time }) => (
        <div
          key={id}
          className="box"
        >
          <h4>{message}</h4>
          <div className="inTheBox">
            <p>Auther: {author}</p>
            <p>
              {date} {time}
            </p>
          </div>
        </div>
      ))}
      <hr /> */}
      <h1>---------Lab 4, 5---------</h1>
      <TodoList />;
    </div>
  );
}

export default App;
