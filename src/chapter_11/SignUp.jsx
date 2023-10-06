import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름(alert): ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form  onSubmit={handleSubmit}>
            <label>
                이름🪡:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <br />
            <br />
            <label>
                성별 :
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자ㅇㅇ</option>
                    <option value="여자">여장ㅇ</option>
                </select>
            </label>
            <button type="submit">제출!!!!</button>
        </form>
    );
}

export default SignUp;