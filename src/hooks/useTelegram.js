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
    const username = tg.initDatUnsafe?.user.username
    return {
        tg,
        username,
        closeHandler,
        onToggleButton
    }

}