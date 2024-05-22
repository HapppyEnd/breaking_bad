import { BASE_URL } from '@/lib/settings'

export default async function createOrder(
    name: string, phone_number: string, order : Array<number>) {
    console.log('order', order)
    const idCount = order.map((row:any) => {
        return {
            id: row.id,
            count: row.count
        }
    })

    function readCookie(name:any) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
    var csrftoken = readCookie('csrftoken');
    const bo = JSON.stringify({
        name: name,
        phone_number: phone_number,
        products: idCount
    })

    console.log(bo)

    const query = await fetch(`${BASE_URL}/order/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken!,
        },
        body: bo
    })

    console.log(query.status)

    if (!query.ok) {
        //console.log(query.json().then(e => console.log(e)))
        console.log('not ok')
        return await query.json().then()
    }
    return false
}