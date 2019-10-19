export default function FormatDate(dateString) {
    let seconds = Date.parse(dateString);
    let localized = new Date(seconds);
    let converted = localized.toString();
    let d = converted.slice(4, 15).split(" ");
    d.splice(0, 3, d[0], d[1], d[2]);

    let x = d.join("-");
    
    return x;
}
//changes date from 2019-10-21T07:00:00.000Z
//to 10/21/2019
