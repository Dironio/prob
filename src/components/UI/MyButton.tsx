import '../../styles/components/UI/MyButton.css';
import { MouseEvent } from "react";

interface MyButtonProps {
    children: string
    color?: 'green' | 'blue' | 'red'
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

function MyButton(props: MyButtonProps) {
    return (
        <button className={'my-button ' + (props.color || '')} 
        children={props.children} 
        onClick={props.onClick}></button>
    )
}

export default MyButton