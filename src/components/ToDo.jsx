import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({toDo, markDone , setUpdateData, deleteTask}) =>{
    return(
        <>
        {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? 'Done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskTest" style={task.status ? {textDecoration:'line-through',opacity:0.3}:null}>{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / Not Completed"
                    onClick={(e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  </span>

                  {task.status ? null : (
                    <span title="Edit"
                    onClick={ () => setUpdateData({
                      id: task.id, 
                      title: task.title,
                      status: task.status ? true : false
                    })}>
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </span>
                  )}

                  <span title="Delete"
                    onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </span>
                </div>
              </div>

            </React.Fragment>
          )
        })}
        </>
    );
}

export default ToDo;