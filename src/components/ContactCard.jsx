import "../App.css"

function ContactCard({img,name,email,phone}) {
    return(
        <div  className={"contact-card"}>

            <div className={"card-page"}>

                    <img style={{paddingTop:"20px",width:"300px",height:"300px"} } src={img} alt={"dfd"} />
                    <h3>{name}</h3>

                    <div style={{position:"absolute",right:"175px",top:"380px", display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <img  src="https://img.icons8.com/material/24/undefined/phone-disconnected--v1.png" alt={"ab"}/>
                        <p style={{paddingLeft:"10px"}} >{phone} </p>
                    </div>

                    <div style={{paddingLeft:"25px",position:"relative",top:"30px", display:"flex",alignItems:"center",justifyContent:"center"}} >
                        <img  src="https://img.icons8.com/material/24/undefined/filled-sent.png" alt={"daf"}/>
                        <p style={{paddingLeft:"5px"}}>{email} </p>
                    </div>


            </div>


        </div>
    )
}

export default ContactCard