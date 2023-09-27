import axios from "axios"
import { Url } from "../Url"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Shorten = () => {
    const { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [load, setLoad] = useState("")

    const apiVerify = async () => {
        try {
            const res = await axios.post(`${Url}api/Urlverify`, { id })
            if (res.data) {
                console.log(res.data.id)
                setLoad(res.data.OriginalUrl)
                window.location.href = res.data.OriginalUrl
            } else {
                setLoad("no url shortened")
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        apiVerify()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null;
}

export default Shorten

