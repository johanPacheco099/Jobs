import { RouterWebAppPort, Application, express, dotenv, path } from './web-app.dependency'
export default class WebApp {
  #app: Application

  constructor (private readonly routerWebApp: RouterWebAppPort) {
    this.#app = express()
    this.#config()
    this.#routes()
  }

  #config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.#app.set('view engine', 'ejs')
    this.#app.set('views', path.join(__dirname, '../template'))
    this.#app.use(express.static(path.join(__dirname, '../public')))
    this.#app.use(express.urlencoded({ extended: true }))
  }

  #routes = (): void => {
    this.#app.use('/', this.routerWebApp.router)
    this.#app.use('*', this.routerWebApp.router)
  }

  start = (): void => {
    this.#app.listen(process.env.PORT, () => {
      const port = (process.env.PORT != null) ? process.env.PORT : 'undefined'
      const host = (process.env.HOST !== undefined) ? process.env.HOST : 'undefined'
      console.info(`SERVER: http://${host}:${port}`)
    })
  }
}
