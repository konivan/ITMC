export default function WorkComponent({image, itIcon, mIcon, cIcon}) {
    return(
        <div>
            <div className="picture">{image}</div>
            <div className="icons">
                {itIcon ? <></> : mIcon ? <></> : cIcon ? <></> : null}
            </div>
        </div>
    )
}