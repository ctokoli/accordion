import { useState } from "react"
import dataArray, { Data } from "./data";


export default function Accordion(): JSX.Element {
    const [ selected, setSelected ] = useState<number | null>(null);
    
   
    const handleSingleSeletion = ({ id }: Data ) => {
        setSelected( id === selected ? null : id )
    }
  return (
    <div className="wrapper">
        <div className="accordion">
            { dataArray.length === 0  && (<div> No data Available </div>) }
            {dataArray.map((data) => (
                <div className="item" key={data.id}>
                    <div 
                        className="title" 
                        onClick={ () => handleSingleSeletion(data)}>
                        <h3>{data.question}</h3>
                        { selected !== data.id  && (
                            <span>+</span>
                        ) } 
                        {selected === data.id && (
                        <div className="">
                            <span>-</span>
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
