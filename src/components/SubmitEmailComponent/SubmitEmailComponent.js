import React from 'react';
import LoadingComponent from '../LoadingComponent'

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
                  <small id="emailHelp" className="form-text text-muted">Load Ideas Attached to Given Email Address, Otherwise Continue as 'Guest'</small>              
                </div> :
                <div>
                  <h5>Viewing ideas logged by { props.user }</h5>
                </div>
              }
            </div>
            <div className="col-2"></div>
          </div>
          {
            !props.user.length ?
              <button type="submit" className="btn btn-primary" onClick={props.submitEmail}>Submit</button> :
              <button type="submit" className="btn btn-primary" onClick={props.logout}>Logout</button>
            }
        </form>                        
    }
  </div>  
)

export default SubmitEmail;