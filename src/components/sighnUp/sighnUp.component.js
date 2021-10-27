import React from "react";
import { Button } from 'react-bootstrap';


export default function SighnUp() {
    return (
        <div>
            <div className="input-group">
                <span className="input-group-text">First name</span>
                <input
                    className="space form-control"
                    type="text"
                    aria-label="First name"
                ></input>
                <br/>

                <span className="input-group-text">Last name</span>

                <input
                    className="space form-control"
                    type="text"
                    aria-label="Last name"
                    
                >
                </input>
            </div>

            <div className="mb-3">
                <label
                    className="exampleFormControlInput1 form-label"
                >
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                >
                </input>
            </div>

            <div className="input-group">
                <span className="input-group-text">
                    Relationship to the deceased:
                </span>
                <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                >
                </input>
            </div>

            <div className="input-group">
                <span className="input-group-text">
                    {" "}
                    Deceased name and mothers name in Hebrew:
                </span>
                <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                ></input>
                <div className='new-line'></div>

                Other family members:
                <Button
                    type="button"
                    id="yes-btn"
                >
                  Yes
                </Button>
                <Button
                    type="button"
                    id="no-btn"
                    className="btn btn-secondary btn-sm"
                    value="No"
                >
                    
                </Button>
                <div className="show">
                    <span className="input-group-text">
                        number of family members
                    </span>
                    <input
                        type="number"
                        value="2"
                        className="form-control"
                        size="10"
                    >
                    </input>
                    <Button
                        type="button"
                        id="ok-btn"
                        className="btn btn-primary btn-sm"
                        value= "OK"
                    >
                        
                        
                    </Button>
                    Options to elevate soul of deceased: ....
                    <div>
                       {/* //</div></div> </a
                            class="link btn btn-primary"
                            href="https://www.emeklearningcenter.com/"
                            target="_blank"
                        >
                            payment
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

