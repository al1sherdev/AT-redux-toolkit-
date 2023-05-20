import React from 'react'

const TextArea = ({ label, state, setState, height='100px' }) => {
  return (
    <div>
        <div className="form-floating">
            <textarea 
                className="form-control" 
                placeholder={label} 
                value={state}
                onChange={e => setState(e.target.value)}
                id="floatingTextarea2" 
                style={{height}}>
            </textarea>
            <label htmlFor="floatingTextarea2">{label}</label>
        </div>
    </div>
  )
}

export default TextArea