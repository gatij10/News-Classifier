import React, { useState } from 'react';
import axios from 'axios';

const ClassifierForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('Processing...');

  const onChange = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);
    //console.log(text);
  };

  const clear = () => {
    setText('');
    setResult('Processing...');
  };

  const classify = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //console.log(text);

    const article = { text };
    //console.log(article);

    const res = await axios.post(
      'https://flask-news-classifier-api.herokuapp.com/api/classify',
      article,
      config
    );

    //const ans = res.data;
    // console.log(res);
    // console.log(res.data);

    setResult(res.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    classify();
  };

  return (
    <div className='text-center'>
      <form onSubmit={onSubmit}>
        <textarea
          className='text-center'
          rows='5'
          type='text'
          name='text'
          placeholder='Enter Text...'
          value={text}
          onChange={onChange}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark'></input>
      </form>
      <button onClick={clear} className='btn btn-dark'>
        Clear
      </button>
      <br></br>
      <br></br>
      <div className='text-center'>
        <h1>{text !== '' && result}</h1>
      </div>
    </div>
  );
};

export default ClassifierForm;
