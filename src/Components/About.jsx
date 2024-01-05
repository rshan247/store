import React from "react";
import Header from "./Header";

function About(){
    return(
        <div>
        <Header />
        <div className="item-container-extra">
            <table className="about-table">
            <thead>
                <tr className="about-row">
                    <th colSpan={2} className="about-th">SRI JEYANTH MARKETING</th>
                </tr>
            </thead>
            <tbody>
                <tr className="about-row">
                    <th>Contact Person</th>
                    <td>Ramachandran.T</td>
                </tr>
                <tr className="about-row">
                    <th>Contact Number</th>
                    <td>2323232323</td>
                </tr>
                <tr className="about-row">
                    <th>Address</th>
                    <td>
                    12/10, ALS Complex,Managavalam Pillai Hospital Street, Palayamkotai Palai Vegitable Market Near</td>
                </tr>
                <tr className="about-row">
                    <th>Open Timing</th>
                    <td>3PM to 7PM</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default About;