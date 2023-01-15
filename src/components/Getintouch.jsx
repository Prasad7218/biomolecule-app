import React, { useState } from "react";

const Getintouch = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    affilation: "",
    comment: "",
  });

  const { email, password, affilation, comment } = data;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getData = () => {
    show();
  };

  const show = () => {
    console.log(data);
  };

  return (
    <>
      <h1 style={{ "margin-top": "40px" }}>Get in touch</h1>
      <div className="container" style={{ "margin-top": "40px" }}>
        <form>
          <div class="form-group">
            <label>Email address</label>
            <input
              name="email"
              value={email}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              name="password"
              value={password}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Affilation</label>
            <input
              type="text"
              name="affilation"
              value={affilation}
              class="form-control"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Comment</label>
            <input
              type="text"
              name="comment"
              value={comment}
              class="form-control"
              onChange={handleChange}
            />
          </div>

          <button onClick={getData} class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Getintouch;
