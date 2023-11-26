import { useState } from 'react';

const data = [
  { time: '25 mins' },
  { price: '₹20' },
  { type: 'Discounts' },
];

const buttons = ['DELIVERY', 'PICK UP'];

const Nav = () => {
  const [selectedOption, setSelectedOption] = useState('DELIVERY');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  } 

  return (
    <nav className="h-[150px] w-[300px] m-auto shadow-xl rounded-sm p-4">
      <div className="font-extrabold text-center mb-2 text-lg"><h1>TSX  PIZZERIAS</h1></div>
      <div className='flex justify-center mb-8 ml-2 mr-2'>
    {buttons.map((option) => (
      <button className='rounded-lg border border-black w-full text-sm font-bold'
        key={option}
        style={{
          backgroundColor: selectedOption === option ? 'black' : '#E0E0E0',
          color: selectedOption === option ? 'white' : 'black',
        }}
        onClick={() => handleOptionChange(option)}
      >
        {option}
      </button>
    ))}
  </div>
      <div className="flex justify-between mr-8 ml-8 mb-2">
      {data.map((item) => (
        <p className='text-esm font-bold' key={item.time || item.price || item.type}>
          {item.time || item.price || item.type}
        </p>
      ))}
    </div>
      <div>
        <p className="text-center text-esm font-extrabold">Menu Hours: 10:00 AM to 11:00 PM</p>
      </div>
    </nav>
  )
}

export default Nav