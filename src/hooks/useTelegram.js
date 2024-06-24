export const useTelegram = () => {
    const tg = window.Telegram.WebApp
    const closeHandler = () => {tg.close()}
    
    const onToggleButton = () => { 
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    const username = tg.initDataUnsafe?.user.username
    const chat = tg.initDataUnsafe?.chat.username
    return {
        tg,
        username,
        chat,
        closeHandler,
        onToggleButton
    }

}