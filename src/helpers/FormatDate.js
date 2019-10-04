export default function FormatDate(dateString) {
    let d = dateString.slice(0, 10).split("-");
    d.splice(0, 3, d[1], d[2], d[0]);

    let x = d.join("/");

    return x;
}
//changes date from 2019-10-21T07:00:00.000Z
//to 10/21/2019
