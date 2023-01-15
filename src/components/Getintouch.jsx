import React from "react";

const Getintouch = () => {
  return (
    <>
      <h1>Get in touch</h1>
      <div className="container" style={{ "margin-top": "40px" }}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Affilation</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Comment</label>
            <input type="text" class="form-control" />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Getintouch;
