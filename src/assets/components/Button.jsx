export default function Button({ content, bg }) {
    let style = null;

    if(bg == "true") {
        style = "bg-primary text-white px-5 py-2 rounded-md cursor-pointer active:scale-90 hover:bg-transparent hover:text-primary transition-all";
    } else {
        style = "text-primary cursor-pointer hover:bg-primary hover:text-white px-5 py-2 rounded-md transition-all"
    }

    return (
        <div className={style}>
            <p>{content}</p>
        </div>
    )
}