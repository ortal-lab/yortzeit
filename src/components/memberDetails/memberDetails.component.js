import { React, useState, useRef } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";

export default function MembersDetails(props) {
    const [basicJewishDay, setBasicJewishDay] = useState();
    const [isHebrew, setIsHebrew] = useState(false);
    const [isGregorian, setIsGregorian] = useState(false);
    const [show, setShow] = useState(false);
    const [isHeb, setIsHeb] = useState(false);
    const { user, setUser } = props;
    const textInput = useRef(null);

     const  clear =()=> {
       debugger;
       setUser(prev => ({...prev, nameOfDec:""}))
       debugger;
        alert(user.nameOfDec);

    }

    function toggle1() {
        setShow(true);
        setIsHebrew((isHebrew) => true);
        setIsGregorian((isGregorian) => false);
    }
    function toggle2() {
        setShow(true);
        setIsHebrew((isHebrew) => false);

        setIsGregorian((isGregorian) => true);
    }

    function contains_heb() {
        const HebrewChars = new RegExp("^[\u0590-\u05FF]+$");

        const check = HebrewChars.test(textInput.current.value);
        console.log(textInput.current.value);
        setIsHeb(check);
    }
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    Deceased name and mothers name in Hebrew:
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={user["nameOfDec"]}
                    onChange={(e) =>{
                        setUser({ ...user, nameOfDec: e.target.value })
                    }
                    }
                    ref={textInput}
                    onBlur={() => contains_heb()}
                />
                <Form.Text id="the_output" className="text-muted">
                    {!isHeb && <p>only hebrew letters</p>}
                </Form.Text>
            </Form.Group>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={toggle1}>
                    Hebrew
                </Button>
                <Button variant="secondary" onClick={toggle2}>
                    Gregorian{" "}
                </Button>
            </ButtonGroup>

            {show && isGregorian && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date Of Death</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter Date Of Death"
                        value={user.greDate}
                        onChange={(e) =>
                            setUser({ ...user, greDate: e.target.value })
                        }
                    />
                    <Form.Text className="text-muted"></Form.Text>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Day</Button>
                        <Button variant="secondary">Night </Button>
                    </ButtonGroup>
                </Form.Group>
            )}

            {show && isHebrew && (
                <ReactJewishDatePicker
                    value={new Date()}
                    isHebrew
                    onClick={(day) => {
                        setBasicJewishDay(day);
                        //  console.log(day.date.getMonth());
                        //  console.log(day.date.getUTCMonth());
                    }}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            hebDate: e.target.value.jewishDate,
                        });
                    }}
                />
            )}

            <div className="d-grid gap-2">
                <Button variant="primary" size="mid">
                    Submit
                </Button>
                <Button
                    variant="secondary"
                    size="mid"
                    onClick={() => {
                        clear();
                    }}
                >
                    Other Member:
                </Button>
            </div>
        </>
    );
}
