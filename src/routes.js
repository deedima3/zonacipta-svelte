import MainMenu from './routes/App/MainMenu.svelte'
import Registration from './routes/Auth/Registration.svelte'
import Login from './routes/Auth/Login.svelte'
import SplashLoad from './custom/SplashScreen/SplashLoad.svelte'
import History from './routes/App/History.svelte'
import Location from './routes/App/Location.svelte'
import Payment from './routes/App/Payment.svelte'

const routes = {
    '/' : MainMenu,
    '/registration' : Registration,
    '/login' : Login,
    '/splashload' : SplashLoad,
    '/history' : History,
    '/location/:id' : Location,
    '/payment' : Payment
}
  
export { routes }