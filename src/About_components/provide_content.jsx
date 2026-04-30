import './about_intro.css'

export default function Provide_card({heading,data}){
    return (
        <div id='provide_card'>
            <h1 style={{textAlign:'center'}}>{heading}</h1>
            <h2 style={{textAlign:'center'}}>{data}</h2>
        </div>
    )
}