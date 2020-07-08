import React from "react";
import { Row, Col, Input } from "antd";
import "antd/dist/antd.css";


const { Search } = Input
export const SearchBox = ({searchHandler}) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="enter movie, series, episode name"
                    enterButton="Search"
                    size="large"
                    onSearch={value => searchHandler(value)}
                />
              
            </Col>
        </Row>
        
    )
}