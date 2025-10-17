import type { IUser } from "./user"

export interface IGroup {
    "id": string,
    "createdOn": number,
    "creator": IUser,
    "active": boolean,
    "joinStatus": string,
    isSuspended: boolean,
    "data": {
        "address": string,
        "contactNumber": string,
        "email": string,
        "name": string,
        "password": string,
        "join_setting": string,
        "isPublic": boolean,
        "memberCount": number,
        "favorites": string,
        "picUrls": string,
        "imgSrc": string,
        "description": string,
        "publicChatAccess": boolean
    },
    "lastModifiedDate": number
}