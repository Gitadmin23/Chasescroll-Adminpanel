import type { IUser } from "./user"

export interface IBusiness {
    "id": string,
    "createdDate": number,
    "lastModifiedDate": number,
    "isDeleted": boolean,
    "name": string,
    "category": string,
    "openingHours": any,
    "images": Array<
        string
    >,
    "price": string,
    "hasFixedPrice": boolean,
    "discount": number,
    "description": string,
    "rating": number,
    "vendor": IUser,
    "totalBooking": 0,
    "isOnline": boolean,
    "address": any,
    "email": string,
    "phone": string,
    "socialMediaHandles": Array<any>,
    "website": string,
    "location": {
        "link": any,
        "address": any,
        "country": any,
        "street": any,
        "city": any,
        "zipcode": any,
        "state": string,
        "locationDetails": any,
        "latlng": any,
        "placeIds": any,
        "toBeAnnounced": any
    },
    "state": string,
    "hasBought": boolean,
    "hasReviewed": boolean
}

export interface IProduct {
    "id": string,
    "createdDate": number,
    "lastModifiedBy": any,
    "createdBy": IUser,
    "lastModifiedDate": number,
    "isDeleted": boolean,
    "status": any,
    "statusCode": number,
    "returnMessage": string,
    "creator": IUser,
    "name": string,
    "description": string,
    "category": string,
    "images": Array<string>,
    "price": number,
    "quantity": number,
    "outOfStock": boolean,
    "hasDiscount": boolean,
    "discountPrice": number,
    "published": boolean, 
    color: Array<{
        label: string,
        color: string
    }>,
    size: Array<string>,
    hasBought :  false;
    hasReviewed: false;
    rating: number
    "location": {
        "link": string,
        "address": string,
        "country": string,
        "street": string,
        "city": string,
        "zipcode": string,
        "state": string,
        "locationDetails": string,
        "latlng": string,
        "placeIds": string,
        "toBeAnnounced": boolean
    },
}

export interface IRental {
    "id": string,
    "createdDate": number,
    "lastModifiedBy": any,
    "createdBy": any,
    "lastModifiedDate": number,
    "isDeleted": boolean,
    "status": any,
    "statusCode": number,
    "returnMessage": string,
    "creator": IUser,
    "name": string,
    "description": string,
    hasBought :  false;
    hasReviewed: false;
    "category": string,
    rating: number
    "location": {
        "link": string,
        "address": string,
        "country": string,
        "street": string,
        "city": string,
        "zipcode": string,
        "state": string,
        "locationDetails": string,
        "latlng": string,
        "placeIds": string,
        "toBeAnnounced": boolean
    },
    "maximiumNumberOfDays": number,
    "price": number,
    "images": Array<string>,
    "address": any;
    frequency: string,
    dailyPrice: number,
    hourlyPrice: number
}