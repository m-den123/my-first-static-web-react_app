import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const {text} = await( await fetch('/api/message_test1')).json();
      setData(text);
    })();
  });
  return <div>{data}</div>
  //const value = '世界';
  //return <div>Hello {value}!!!</div>;
}

export default App;
