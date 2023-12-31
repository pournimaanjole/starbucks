import "./../../../index.css";
import "./OrderCard.css";



import Button from "./../../Button/Button";

export default function OrderCard({Coffieimg,Vegimg,NameOfCoffie,Calaries,AboutCoffie,Price}) {
    return (
        <div className="shadows maincontainer ">

            <div className="conatainer d-flex flex-row ">
                <img src={Coffieimg} className="image"></img>

                <div className="containcontainer">
                    <img src={Vegimg} className="vegimg"></img>
                    <h3 className="highlight">{NameOfCoffie}</h3>
                    <p className="calaries"> {Calaries}</p>
                    <p className="about">{AboutCoffie}</p>
                </div>
            </div>
            <div className="d-flex flex-row lastcontainer">
                <h3 className="price">{Price}</h3>
                <Button btnName="Add Item" className="itembtn"/>

            </div>
        </div>
    )
}