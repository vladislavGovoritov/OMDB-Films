import React from "react";
import {  Col, Card } from "antd";
import "antd/dist/antd.css";


const { Meta } = Card;

export const ColCardBox = ({Title, Poster}) => {

    

    return (
        <Col style={{margin: '20px 0'}} className="gutter-row" span={4}>
            <div className="gutter-box">
                <Card
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt={Title}
                            src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                        />
                    }
                    
                >
                    <Meta
                            title={Title}
                            description={false}
                    />
                    
                </Card>
            </div>
        </Col>
    )
}

