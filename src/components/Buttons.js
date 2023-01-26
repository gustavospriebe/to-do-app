import './Buttons.css'

function Buttons({tasks}) {
    return (
        <div className="buttons">
            <p className="qty-tasks">2/{tasks.length} tasks done</p>
        </div>
    );
}

export default Buttons;
