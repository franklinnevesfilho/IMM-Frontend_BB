import './FilterModal.css';
import {ReactNode} from "react";

interface filterModalProps {
    setOpen: (open: boolean) => void;
    onSubmit: () => void;
    children?: ReactNode;
}

function FilterModal( {setOpen, onSubmit, children}: filterModalProps) {

    const close = () => {
        setOpen(false);
    }

    window.onclick = (e: MouseEvent) => {
        if((e.target as HTMLElement).className === 'modal-background') {
            setOpen(false);
        }
    }

    return (
        <div className={'modal-background'}>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className={'title'} >Filter</h3>
                        <h3 className={'btn'} onClick={ close }>X</h3>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button onClick={ onSubmit }>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;