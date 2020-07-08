import React, { useEffect, useState } from "react";
import { Layout, Row, Alert, Typography } from "antd";
import "antd/dist/antd.css";
import { SearchBox } from "./SearchContainer/SearchContainer";
import { ColCardBox } from "./ContentContainer/ContentContainer";
import { Loader } from "./Loader/Loader";

const API_KEY = "ce762116";
const { Header, Content, Footer } = Layout;

const TextTitle = Typography.Title;

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q, setQuery] = useState("The Lord of the Rings");
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
            .then((resp) => resp)
            .then((resp) => resp.json())
            .then((response) => {
                if (response.Response === "False") {
                    setError(response.Error);
                } else {
                    setData(response.Search);
                    console.log(response);
                }

                setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                setLoading(false);
            });
    }, [q]);

    return (
        <div className="App">
            <Layout className="layout" >
                <Header style={{backgroundColor:'#875520'}}>
                    <div style={{ textAlign: "center" , }}>
                        <TextTitle
                            style={{ color: "#060503", marginTop: "14px" }}
                            level={3}
                        >
                            OMDB films
                        </TextTitle>
                    </div>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <SearchBox searchHandler={setQuery} />
                        <br />

                        <Row gutter={16} type="flex" justify="center">
                            {loading && <Loader />}

                            {error !== null && (
                                <div style={{ margin: "20px 0" }}>
                                    <Alert message={error} type="error" />
                                </div>
                            )}

                            {data !== null &&
                                data.length > 2 &&
                                data.map((result, index) => (
                                    <ColCardBox key={index} {...result} />
                                ))}
                        </Row>
                        <button
                            style={{
                                marginLeft: "800px",
                                position: "absolute",
                            }}
                            onClick={() => setShowMore(!showMore)}
                        >
                            Show more
                        </button>
                        {showMore &&
                            data.map((result, index) => (
                                <ColCardBox key={index} {...result} />
                            ))}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center", backgroundColor:'#875520', fontWeight:'bold' }}>OMDB films</Footer>
            </Layout>
        </div>
    );
}

export default App;
