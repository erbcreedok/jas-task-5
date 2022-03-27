function formatTwoDigits(number) {
    if (number < 10) {
        return '0' + number
    }
    return number
}

function formatDate(date) {
    return `${formatTwoDigits(date.getHours())}:${formatTwoDigits(date.getMinutes())} ${date.toLocaleDateString()}`
}

function CommentTop({ comment }) {
    return (
        <div className="top">
            <img className="avatar" src={comment.author.avatarUrl} alt="" />
            <span className="name">{comment.author.name}</span>
            <span className="date">{formatDate(new Date(comment.created))}</span>
        </div>
    )
}

export function CommentBlock({ comment, depth = 0 }) {
    console.log(comment.text, depth)
    return (
        <>
            <div className="comment_block" style={{ marginLeft: depth * 30 + 'px'}}>
                <CommentTop comment={comment} />
                <div className="text">
                    {comment.text}
                </div>
            </div>
            {comment.answers && comment.answers.map((item) => (
                <CommentBlock comment={item} depth={depth + 1} />
            ))}
        </>
    )
}
