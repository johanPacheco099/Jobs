import { City, CityAppControllerPort, CityAppModel } from './app/controller/city/city-app-controller.dependency'
import CityAppController from './app/controller/city/city-app.controller'
import { JobAppControllerPort, JobAppModelPort } from './app/controller/job/job-app-controller.dependency'
import JobAppController from './app/controller/job/job-app.controller'
import CityAppModelPort from './app/model/city/city-app-model.port'
import { CityRepositoryJsonAdapterPort, Job, JobRepositoryJsonAdapterPort } from './app/model/job/job-app-model.dependency'
import JobAppModel from './app/model/job/job-app.model'
import CityRepositoryJsonAdapter from './repository/adapter/json/city/city-repository-json.adapter'
import JobRepositoryJsonAdapter from './repository/adapter/json/job/job-repository-json.adapter'
import { CityWebAppAdapterPort } from './web-app/adapter/city/city-web-app-adapter.dependency'
import CityWebAppAdapter from './web-app/adapter/city/city-web-app.adapter'
import { JobWebAppAdapterPort } from './web-app/adapter/job/job-web-app-adapter.dependency'
import JobWebAppAdapter from './web-app/adapter/job/job-web-app.adapter'
import { ErrorWebAppViewPort, IndexWebAppViewPort, WebAppRouterPort } from './web-app/router/web-app-router.dependency'
import WebAppRouter from './web-app/router/web-app.router'
import ErrorWebAppView from './web-app/view/error/error-web-app.view'
import IndexWebAppView from './web-app/view/index/index-web-app.view'
import JobDescWebAppView from './web-app/view/job-desc/job-desc-web-app.view'
import WebApp from './web-app/web-app'
import mysql from 'mysql';


const cityRepositoryJsonAdapter: CityRepositoryJsonAdapterPort<City> = new CityRepositoryJsonAdapter();
const cityAppModel: CityAppModelPort = new CityAppModel(cityRepositoryJsonAdapter);
const cityAppController: CityAppControllerPort = new CityAppController(cityAppModel);
const cityWebAppAdapter: CityWebAppAdapterPort = new CityWebAppAdapter(cityAppController)
const jobRepositoryJsonAdapter: JobRepositoryJsonAdapterPort<Job> = new JobRepositoryJsonAdapter()
const jobAppModel: JobAppModelPort = new JobAppModel(jobRepositoryJsonAdapter)
const jobWebAppController: JobAppControllerPort = new JobAppController(jobAppModel)
const jobWebAppAdapter: JobWebAppAdapterPort = new JobWebAppAdapter(jobWebAppController)
const indexWebAppView: IndexWebAppViewPort = new IndexWebAppView(jobWebAppAdapter, cityWebAppAdapter)
const jobDescWebAppView: JobDescWebAppView = new JobDescWebAppView(jobWebAppAdapter) //cityWebAppAdapter)
const errorWebAppView: ErrorWebAppViewPort = new ErrorWebAppView()
const router: WebAppRouterPort = new WebAppRouter(indexWebAppView, jobDescWebAppView, errorWebAppView)
const jobs: WebApp = new WebApp(router)

function createMySQLConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'informatica12345',
    database: 'jobs',
  });
}


const connection = createMySQLConnection();

connection.connect((error: Error | null) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
    const sql = 'SELECT * FROM user';
    connection.query(sql, (error: Error | null, results: any[]) => {
      if (error) {
        console.error('Error al ejecutar la consulta: ', error);
      } else {
        console.log('Resultados de la consulta: ', results);
        // Realiza las operaciones que necesites con los resultados de la consulta
      }
    });
  }
});

// Evento 'error': Se dispara cuando ocurre un error durante la conexión
connection.on('error', (error: Error) => {
  console.error('Error en la conexión con la base de datos: ', error);
});

// Evento 'connect': Se dispara cuando la conexión es establecida correctamente
connection.on('connect', () => {
  console.log('Conexión establecida correctamente');
});

// Evento 'end': Se dispara cuando la conexión se cierra
connection.on('end', () => {
  console.log('Conexión cerrada');
});

jobs.start()
