import React from 'react';
import { Button, Typography } from "antd";
const { Paragraph } = Typography;

function Tab(props) {
    return (
        <div className="tab">
            <Paragraph>Вид</Paragraph>

            <div className="tab__view">
                <Button className="tab__button">Таблица</Button>
                <Button className="tab__button">Превью</Button>
            </div>
        </div>
    );
}

export default Tab;