import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;

function Sort(props) {
    const handleActiveButton = ({ target }) => {
        removeActiveButton(target);
        target.classList.add(`${target.classList[0]}_active`);
    };

    const removeActiveButton = ({ classList }) => {
        const buttons = document.querySelectorAll(`.${classList[0]}`);
        buttons.forEach((item) => {
            item.classList.remove(`${classList[0]}_active`);
        });
    };

    return (
        <div className="sort">
            <Paragraph>Сортировка</Paragraph>
            <div className="sort__people">
                <Link to="/sort?type=id">
                    <button
                        className="sort__button button"
                        onClick={handleActiveButton}
                    >
                        ID
                    </button>
                </Link>
                <Link to="/sort?type=name">
                    <button
                        className="sort__button button"
                        onClick={handleActiveButton}
                    >
                        Имя
                    </button>
                </Link>
                <Link to="/sort?type=age">
                    <button
                        className="sort__button button"
                        onClick={handleActiveButton}
                    >
                        Возраст
                    </button>
                </Link>
            </div>
            <div className="sort-updown">
                <button
                    className="sort-updown__button button"
                    onClick={handleActiveButton}
                >
                    По возрастанию
                </button>
                <button
                    className="sort-updown__button button"
                    onClick={handleActiveButton}
                >
                    По убыванию
                </button>
            </div>
        </div>
    );
}

export default Sort;
