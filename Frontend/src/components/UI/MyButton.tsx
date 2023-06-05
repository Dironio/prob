import '../../styles/components/UI/MyButton.css';
import { MouseEvent } from "react";

interface MyButtonProps {
    children: string
    color?: 'green' | 'blue' | 'red' 
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    type?: 'button' | 'submit'
}

function MyButton(props: MyButtonProps) {
    return (
        <button className={'my-button ' + (props.color || '')} 
        children={props.children} 
        onClick={props.onClick}
        type = {props.type || 'submit'}
        ></button>
    )
}

export default MyButton