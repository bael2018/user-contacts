import { useState } from "react"

export const useInput = (str) => {
    const [value, setValue] = useState(str)

    return {
        bind: () => {
            return {
                value,
                onChange: (e) => setValue(e.target.value)
            }
        },
        value,
        clearValue: () => setValue('')
    }
}