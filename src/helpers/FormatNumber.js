export default function FormatNum(string) {
    let parsed = parseFloat(string, 10);
    if (isNaN(parsed)) {return 0}

    parsed = parsed.toFixed(2);

    return parsed
}