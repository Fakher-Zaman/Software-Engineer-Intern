import { Info } from "./UserInfo"

type AdminInfo = Info & {
    admin: string
}

const AdminInfo = ({ username, email, age, location, admin }: AdminInfo) => {
    return (
        <ul>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Age: {age}</li>
            <li>Location: {location.join(', ')}</li>
            <li>Admin: {admin}</li>
        </ul>
    )
}

export default AdminInfo