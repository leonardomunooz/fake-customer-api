export const getProducts = `[
    {
        "category": "string",
        "description": "String",
        "id": int,
        "imagen_id": "string",
        "name": "string",
        "price": float,
        "url_image": "string"
    }
]`
export const productDetail = `{
    "description": "string",
    "id": int,
    "imagen_id": "string",
    "name": "string",
    "price": float,
    "url_image": "string"   
}`

export const getUserFavorites = `{
    "email": "string",
    "favorites": [
        {
            int: {
                "description": "string",
                "id": int,
                "imagen_id": "string",
                "name": "string",
                "price": float,
                "url_image": "string"
            }
        }
    ],
    "id": int
}`;

export const addfavorites = `
    # You have to pass the api key in the header of the request.
    # You can find an api key from the profile page once you log in.

    # Example
    headers : {
        x-api-key : "265e986a8swweq3e23b2bfd107f23f519f404f7aaf6d7b8207d9080"
    }
`

export const getFavorite = `
{
    "email": "leonardo",
    "favorites": [
        {
            "product ": {
                "description": "Fruto de sabor jugoso y ligeramente ácido, ideal para ensaladas",
                "id": 70,
                "imagen_id": "swaegsn0pacqd09i6uln",
                "name": "Tomates",
                "price": 2.0,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1736193412/swaegsn0pacqd09i6uln.png"
            }
        },
        {
            "product ": {
                "description": "Fruta cítrica jugosa y refrescante, rica en vitamina C.",
                "id": 60,
                "imagen_id": "xsvxeyfhtyjvlltjiwwq",
                "name": "Naranjas",
                "price": 2.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1736193161/xsvxeyfhtyjvlltjiwwq.png"
            }
        }
    ],
    "id": 1
}`

export const producto = {
        "description": "Whiskey Tennessee de sabor suave y ligeramente dulce, envejecido en barriles de roble.",
        "id": 1,
        "imagen_id": "dger9hrft3i4olumki7e",
        "name": "whiskey jack daniels",
        "price": 25,
        "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1736186182/dger9hrft3i4olumki7e.png"
    };



// RESPONSES

export const getMessageAddFavorites = `{
        "Msg": "product successfully added to favorites"
}`