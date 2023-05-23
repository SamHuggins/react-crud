import React, {useState} from 'react'

const initialState = {
    partyName: '',
    partyMembers: []
}
export const Form = () => {
    const [formData, setFormData] = useState(initialState)
  return (
    <div>
        <h2>Party Form</h2>
        <form onSubmit={''}>
            <div>
                <input
                    type ="text"
                    placeholder='Enter party name'
                    name='partyName' 
                />
            </div>
            <div>
                <input
                    type ="text"
                    placeholder='Enter party member name'
                    name='partyMember' 
                />
            </div>
            <input type='submit' />
        </form>
    </div>
  )
}
