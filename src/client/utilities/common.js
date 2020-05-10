export function getWidth(txnMonth) {
    let monthYear = new Date(txnMonth)
    let mList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mList[monthYear.getMonth()] + " " + monthYear.getFullYear();
}