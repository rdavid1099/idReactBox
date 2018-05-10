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
      props.loading === 'submitEmail' ?
        <LoadingComponent /> :
        <form>
          <div className="row">
            <div className="col-2"></div>
            <div className="form-group col">
              { !props.user.length ?
                <div>
                  {
                    props.newUserForm ?
                      <input type="email"
                        className="form-control is-invalid"
                        value={props.emailInput}
                        disabled
                      /> :
                      <input type="email"
                        className="form-control"
                        id="inputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onKeyUp={props.trackEmailState}
                      />
                  }
                  <small id="emailHelp" className="form-text text-muted">
                    {
                      props.newUserForm ?
                      `${props.emailInput} is not registered with IdReact Box. Register it now?` :
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
          <button type="submit"
            className="btn btn-primary"
            onClick={buttonOpts(props, {onClick: true})}>
            {buttonOpts(props, {text: true})}
          </button>&ensp;
          {
            props.newUserForm &&
            <button type="submit"
              className="btn btn-danger"
              onClick={buttonOpts({user: 'newUser', logout: props.logout}, {onClick: true})}>
              Cancel
            </button>
          }
        </form>
    }
  </div>
)

export default SubmitEmail;
