import React from 'react'

import'../index.css'

export default function Profile() {

    return (
        <><h2 className="card-header">PROFILE DETAILS</h2><>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    EDIT PROFILE
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <a class="dropdown-item" href="/">Something else here</a>
                </div>
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
