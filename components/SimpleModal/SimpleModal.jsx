
export default function SimpleModal ({children, identifier}) {

    return (
        
        <div className="wrap-modal-window modal-hidden" id={identifier}>
            <div className="simple-modal-window">
                <span className="modal-disabling-button text-description" data-target={identifier}>+</span>
                {children}
            </div>
        </div>
        
    )

}