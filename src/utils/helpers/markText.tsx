export const markText = (text: string, searchText: string, className: string) => {
    if (searchText) {
        const startIndex = text.indexOf(searchText.trim())
        const lastIndex = searchText.trim().length + startIndex


        if (lastIndex === 0 || startIndex === -1) {
            return (
                <p className={className}>{text}</p>
            )
        }

        return (
            <p className={className}>
                {text.slice(0, startIndex)}
                <mark>{text.slice(startIndex, lastIndex)}</mark>
                {text.slice(lastIndex)}
            </p>
        )

    } else {
        return <p className={className}>{text}</p>
    }
}