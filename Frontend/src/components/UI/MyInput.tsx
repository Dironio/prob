import '../../styles/components/UI/MyInput.css'

interface MyInputProps {
    type: 'text' | 'password' | 'email'
    size?: 'middle'
    placeholder?: string
}

function MyInput(props: MyInputProps) {
    return (
        <input className={"my-input " + (props.size || '')}
            type={props.type}
            placeholder={props.placeholder}
        ></input>
    )
}



export default MyInput