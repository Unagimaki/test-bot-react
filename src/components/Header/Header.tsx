import React from "react"
import { Button } from "../Button/Button"
import { tg } from "../../App"

export const Header = () => {
    const username = tg.initDatUnsafe?.user.username
    return(
        <header>
            <h1>{username}</h1>
            <Button>Закрыть</Button>

        </header>
    )
} 