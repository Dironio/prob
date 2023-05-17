import './MyButton.css'

interface MyButtonProps {
    children: string
    color?: 'otclick'
}

function MyButton (props: MyButtonProps) {
    return (
        <button className={'my-button ' + (props.color || '')}>{props.children}</button>
    )
}

export default MyButton