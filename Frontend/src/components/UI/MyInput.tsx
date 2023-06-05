import '../../styles/components/UI/MyInput.css'

interface MyInputProps {
    type: 'text' | 'password' | 'email'
    size?: 'middle'
    id?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function MyInput(props: MyInputProps) {
    return (
        <input className={"my-input " + (props.size || '')}
            type={props.type}
            id = {props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
        ></input>
    )
}



export default MyInput