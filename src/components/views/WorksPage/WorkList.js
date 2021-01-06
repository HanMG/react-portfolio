import React from 'react'

function WorksList(props) {
    // 새창 열기 
    const openInWindow = (url) => {
        const newWindow = window.open(url, '_blank', 'width=500, height=800');
    }

    return (
        <div className="col-lg-4 p-2">
            <div className="card">
                <img className="card-img-top" src={props.imgUrl} alt="works image" style={{ width: "100%" }} />               
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <hr />
                    <p><b>SKILLS</b></p>
                    <p>{props.skills}</p>
                    <p><b>DESCRIBE</b></p>
                    <p className="card-text">{props.describe}</p>          
                    {!props.m &&
                        <a href={props.url} className="btn btn-works stretched-link">VIEW</a>
                    }
                    {props.m &&
                        <a onClick={() => openInWindow(props.url)} className="btn btn-works stretched-link">VIEW</a>
                    }          
                </div>
            </div>
        </div>

    )
}

export default WorksList
