import React from 'react';
import LoadingComponent from '../LoadingComponent'

const buttonOpts = (props, opts) => {
  let response;
  if (props.user.length) {
    response = opts.onClick ? props.logout : 'Logout';
  } else if (props.newUserForm) {
    response = opts.onClick ? props.registerEmail : 'Register';
  } else {
    response = opts.onClick ? props.submitEmail : 'Submit';
  }
  return response;
};

const SubmitEmail = props => (
  <div className="container">
    {
      props.loading ?
        <LoadingComponent /> :
        <form>
          <div className="row">
            <div className="col-2"></div>
            <div className="form-group col">
              { !props.user.length ?
                <div>
                  <input type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onKeyUp={props.trackEmailState}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    {
                      props.newUserForm ?
                      `${props.user} is not registered with IdReact Box. Register it now?` :
                      "Load Ideas Attached to Given Email Address, Otherwise Continue as 'Guest'"
                    }
                  </small>
                </div> :
                <div>
                  <h5>Viewing ideas logged by { props.user }</h5>
                </div>
              }
            </div>
            <div className="col-2"></div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={buttonOpts(props, {onClick: true})}>{buttonOpts(props, {text: true})}</button>
        </form>
    }
  </div>
)

export default SubmitEmail;
