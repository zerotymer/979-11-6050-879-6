import React, { useState } from 'react';

const EventPractice = () => {

  // const [ username, setUsername ] = useState("");
  // const [ message, setMessage ] = useState("");
  
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  
  const [ form, setForm ] = useState({username: "", message: ""});
  const { username, message } = form;
  const onChangeForm = (e) => setForm({ ...form, [e.target.name]: e.target.value});
  
  const onClick = () => {
    alert(form.username + ": " + form.message);
    setForm({username: "", message: ""});
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter')  onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명"
        value={ username }
        onChange={ onChangeForm }
        onKeyDown={ onKeyDown }
      />
      <input type="text" name="message" placeholder="아무거나 입력해 보세요"
        value={ message }
        onChange={ onChangeForm }
        onKeyDown={ onKeyDown }
      />
      <button onClick={ onClick }>확인</button>
    </div>
  );
}

export default EventPractice;