import React from 'react'


import'../index.css'

export default function Profile() {

    return (
        <><h2 className="card-header">PROFILE DETAILS</h2><>
            <div class="dropdown">
                <button class="btn" type="button" id="dropdownMenuButton">
                    EDIT PROFILE
                </button>
                
            </div>

            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label ">
                    EMPLOYEE NAME:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        readOnly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue="FULL NAME" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    EMPLOYEE CODE:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        readOnly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue="XXXX" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    EMPLOYEE POSITION:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        readOnly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue="SE" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    EMPLOYEE MOBILE:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        readOnly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue="9999999999" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    EMPLOYEE EMAIL
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        readOnly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue="email@example.com" />
                        
                    <div>

                    </div>
                </div>
            </div>

        </></>


    )
}
