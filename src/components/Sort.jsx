import React from "react";
import { Button, Typography } from "antd";
const { Paragraph } = Typography;

function Sort(props) {
    return (
        <div className="sort">
            <Paragraph>Сортировка</Paragraph>
            <div className="sort__people">
                <Button className="sort__button">ID</Button>
                <Button className="sort__button">Имя</Button>
                <Button className="sort__button">Возраст</Button>
            </div>
            <div className="sort-updown">
                <Button className="sort-updown__button">По возрастанию</Button>
                <Button className="sort-updown__button">По убыванию</Button>
            </div>
        </div>
    );
}

export default Sort;
