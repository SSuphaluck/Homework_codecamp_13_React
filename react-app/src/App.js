import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [input, setInput] = useState('');
  return (
    <form>
      <p>
        Name :{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Gender :{' '}
        <input
          type="radio"
          name="gender"
          value="man"
          checked={gender === 'man'}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="gender">Man</label>
        <input
          type="radio"
          name="gender"
          value="women"
          checked={gender === 'women'}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="gender">Women</label>
        <input
          type="radio"
          name="gender"
          value="others"
          checked={gender === 'others'}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="gender">Others</label>
      </p>
      <p>
        Month of Birth :{' '}
        <select
          name="monthOfBirth"
          value={monthOfBirth}
          onChange={(e) => setMonthOfBirth(e.target.value)}
        >
          <option value="">select</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </p>
      <p>
        Your picture :{' '}
        <input
          type="file"
          onChange={(event) => setInput(event.target.value)}
        />
      </p>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log({ name, gender, monthOfBirth, input });
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default App;
