import React from 'react';

const SubmitEmail = props => (
  <div className="container">
    <form>
      <div className="row">
        <div className="col-2"></div>
        <div className="form-group col">
          <input type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onKeyUp={props.trackEmailState}
          />
          <small id="emailHelp" className="form-text text-muted">Load Ideas Attached to Given Email Address, Otherwise Continue as 'Guest'</small>
        </div>
        <div className="col-2"></div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.submitEmail}>Submit</button>
    </form>                
  </div>  
)

export default SubmitEmail;