import React, { useState } from "react";

export default function SigninForm() {
  // state
  const [name, setName] = useState("");
  // handle Form data
  const handleSubmit = e => {
    e.preventDefault();
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Please enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}
