import React, { Component } from 'react'
import styles from "./styles.module.scss";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IStaffPortalProps } from '../IStaffPortalProps';
import pnp from 'sp-pnp-js';

export default class Login extends React.Component<IStaffPortalProps, any>{
    public constructor(props:IStaffPortalProps, any)
    {
        super(props);
        this.state={
           MyName: '',
           MyDp: '',
           MyEmail: ''
        }
       
        }
    render() {
        return (
            <div className={styles.loginbg}>
            <div className={styles.login}>
              <div className={styles.grid}>
                <div className={`${styles.loginCard} ${styles.purpleBg}`}>
                      
                      <div className={styles.name}>
                      <img src="http://lotusbetaanalytics.com/img/white.png" alt="LBAN" />
                          <p>Lotus Beta Analytics</p>
                          <p>NIGERIA LIMITED</p>
                      </div>
                          <h4>Staff Portal</h4>
                </div>
                <div className={`${styles.loginCard} ${styles.whiteBg}`}>
                            <h4>Welcome</h4>
                            <h5>{this.state.MyName}</h5>
                            <img src={this.state.MyDp} alt={this.state.MyName} />
                            {/* <small>{this.state.MyEmail}</small> */}
                    <Link className="btn btn-warning btn-block" to={'/dashboard'}>Sign in </Link>
                </div>
              </div>
            </div>
          </div>
        )
    }

    public componentDidMount() {
        // debugger;
        this._UserInfo();
     
    
      }
      private _UserInfo(): void {
        pnp.sp.profiles.myProperties.get()
      .then((response) => {
        console.log(response)
        this.setState({ MyName: response.DisplayName, MyEmail: response.Email, MyDp: response.PictureUrl });
        localStorage.setItem('MyName', response.DisplayName);
        localStorage.setItem('MyEmail', response.Email);
        localStorage.setItem('MyDP', response.PictureUrl);
      }
      )}
}
