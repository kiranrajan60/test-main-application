import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./CardData/Cards";
import "../components/App.css";

const App = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('Test.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="main-body">
            <SearchBar />
            <div className="container card-main">
                <h3 className="food-head pt-3">Foods</h3>
                <div className="row">
                    {data && data.length > 0 && data.map((item) =>
                        <div className="col-sm-12 col-md-4 mt-5">
                            <Cards
                                image={item.imageUrl}
                                name={item.Ingredient}
                                description={item['Short text']}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )}

export default App;