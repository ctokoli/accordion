import { useState } from "react"
import dataArray, { Data } from "./data";


export default function Accordion(): JSX.Element {
    const [ selected, setSelected ] = useState<number | null>(null);
    
   
    const handleSingleSeletion = ({ id }: Data ) => {
        setSelected( id === selected ? null : id )
    }
  return (
    <div className="wrapper">
        <button className="btn">Enable multi selection</button>
        <div className="accordion">
            { dataArray.length === 0  && (<div> No data Available </div>) }
            {dataArray.map((data) => (
                <div className="item" key={data.id}>
                    <div 
                        className="title" 
                        onClick={ () => handleSingleSeletion(data)}>
                       <div className="head-title">
                       { selected !== data.id ? <span className="icon">+</span> :  <span className="icon">-</span> }
                        <h3>{data.question}</h3>
                       </div>
                        {selected === data.id && (
                        <div className="content-wrapper">
                            <div className="content">{data.answer}</div>
                        </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
