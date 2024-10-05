import { useState } from 'react';
import './App.css';

function App() {
  const [oddArr, setOddArr] = useState([])
  const [evenArr, seEvenArr] = useState([])
  const [error, setError] = useState(false)
  const [numValue, setNumValue] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isNaN(numValue) && (numValue !== "")) {
      (numValue % 2 === 0) ? seEvenArr([...evenArr, numValue]) : setOddArr([...oddArr, numValue])
      setNumValue("")
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1500);

    }
  }

  return (
    <div className="flex flex-col space-y-4 mt-[3rem] lg:mx-auto md:px-56 sm:px-14 px-5">
      {/* heading and desc*/}
      <h1 className='text-3xl font-semibold'>
        Task One
      </h1>
      <p>
        Storing input textbox value into an array, displaying the separate Even Array and Odd Array using Javascript
      </p>

      {/* input form*/}
      <form onSubmit={onSubmit} className='flex flex-col'>

        <label htmlFor="value" className="mb-1">Task Value *</label>
        <input value={numValue} onChange={(e) => setNumValue(e.target.value)} type="text" id="value"
          className="focus:shadow-inputShadow focus:outline-none focus:border focus:border-[#8db7fd] border border-[#cfd4da] w-80 h-12 rounded-md text-xl text-[#212529] p-2 transition-all"
        />
        {/* error message */}
        {error && <p className='text-base text-red-500'>The Task Value field contains only numbers.</p>}

        <button type="submit" className="text-white bg-[#2e6ffc] hover:bg-blue-800 rounded-lg w-fit text-base px-3 py-2 transition-all mt-4 select-none">
          Submit
        </button>

      </form>

      {/* odd/even */}
      <section className='flex flex-col space-y-1'>

        <h1 className='text-2xl font-semibold mt-7'>Output Result:</h1>

        {/* even */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Even Array</h3>
          <ul className='list-disc ml-8'>
            {evenArr.map((num, i) => <li key={i}>{num}</li>)}
          </ul>
        </div>

        {/* odd */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Odd Array</h3>
          <ul className='list-disc ml-8'>
            {oddArr.map((num, i) => <li key={i}>{num}</li>)}
          </ul>
        </div>

      </section>

    </div>
  );
}

export default App;
