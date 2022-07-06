import React, {useEffect, useState} from 'react';
import style from './ProfileInfo.module.css';


const ProfileStatus = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={style.status}>
        {!editMode &&
        <div>
           <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                   value={status}/>
        </div>
        }
    </div>
}


export default ProfileStatus;