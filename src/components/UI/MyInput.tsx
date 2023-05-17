import './MyInput.css'

interface MyInputProps {
    type: 'text' | 'password' | 'email'
}

function MyInput (props: MyInputProps) {
    return (
        <input className="my-input" type={props.type}></input>
    )
}



export default MyInput