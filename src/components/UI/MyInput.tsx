import '../../styles/components/UI/MyInput.css'

interface MyInputProps {
    type: 'text' | 'password' | 'email'
    placeholder?: string
}

function MyInput (props: MyInputProps) {
    return (
        <input className="my-input" type={props.type} placeholder={props.placeholder}></input>
    )
}



export default MyInput