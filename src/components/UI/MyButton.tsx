import '../../styles/components/UI/MyButton.css'

interface MyButtonProps {
    children: string
    color?: 'otclick' | 'rega'
    onClick?: () => void
}

function MyButton(props: MyButtonProps) {
    return (
        <button className={'my-button ' + (props.color || '')} 
        children={props.children} 
        onClick={props.onClick}></button>
    )
}

export default MyButton