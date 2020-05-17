import React from "react";
import { useSelector } from "react-redux";

function People(props) {
    const people = useSelector((state) => state.people);
    
    return (
        <ul className="people">
            {people.map((item) => (
                <li className="people__item" key={item.id}>
                    <div className="people__img-container">
                        <img
                            src={`/images/${item.image}.svg`}
                            alt="avatar"
                            className="people__img"
                        />
                    </div>
                    <div className="people__name">{item.name}</div>
                    <div className="people__age">{item.age} лет</div>
                    <div className="people__number">{item.phone}</div>
                </li>
            ))}
        </ul>
    );
}

export default People;
