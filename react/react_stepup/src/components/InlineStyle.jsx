export const InlineStyle = () => {
    const containerSyle = {
        border: 'solid 2px #392eff',
        borderRadius: '20px',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    const titleSyle = {
        margin: 0,
        color: "#3d84a8",
    }
    const buttonSyle = {
        backgroundColor: "#abedd8",
        border: 'none',
        padding: '8px',
        borderRadius: '8px',
    }
    return(
        <div style={containerSyle}>
            <p style={titleSyle}>- inline Style -</p>
            <button style={buttonSyle}>ボタン</button>
        </div>
    )
}