import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-module-74.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    if (data.access_token) {
                        localStorage.setItem('accessToken', data.access_token);
                        setToken(data.access_token)
                    }
                })
        }
    }, [email])
    return [token]
}
export default useToken
